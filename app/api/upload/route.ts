// // app/api/upload/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(UPLOADS_DIR)) {
//   fs.mkdirSync(UPLOADS_DIR, { recursive: true });
// }

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get('file') as File;

//     if (!file) {
//       return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
//     }

//     // Validate file type
//     const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
//     if (!allowedTypes.includes(file.type)) {
//       return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 });
//     }

//     // Validate file size (5MB limit)
//     const maxSize = 5 * 1024 * 1024; // 5MB
//     if (file.size > maxSize) {
//       return NextResponse.json({ error: 'File size too large. Maximum 5MB allowed.' }, { status: 400 });
//     }

//     // Generate unique filename
//     const extension = path.extname(file.name);
//     const filename = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}${extension}`;
//     const filePath = path.join(UPLOADS_DIR, filename);

//     // Save file
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     fs.writeFileSync(filePath, buffer);

//     // Return the URL path
//     const imageUrl = `/uploads/${filename}`;
//     return NextResponse.json({ imageUrl });

//   } catch (error) {
//     console.error('Error uploading file:', error);
//     return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'blog-images', // Optional: organize in folders
          transformation: [
            { width: 1200, height: 800, crop: 'limit' }, // Auto-resize
            { quality: 'auto' }, // Auto-optimize quality
            { fetch_format: 'auto' } // Auto-format (WebP when supported)
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    return NextResponse.json({
      imageUrl: (uploadResponse as any).secure_url,
      publicId: (uploadResponse as any).public_id,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

// Optional: Delete image endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');

    if (!publicId) {
      return NextResponse.json({ error: 'Public ID required' }, { status: 400 });
    }

    await cloudinary.uploader.destroy(publicId);
    return NextResponse.json({ message: 'Image deleted successfully' });

  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
