// lib/db.ts
import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface VideoPost {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

// Initialize database tables
export async function initializeDatabase() {
  try {
    const client = await pool.connect();
    
    // Create blogs table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        author VARCHAR(255) NOT NULL DEFAULT 'By Yatish Kumar Goel, Advocate',
        summary TEXT,
        content TEXT NOT NULL,
        image VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create videos table
    await client.query(`
      CREATE TABLE IF NOT EXISTS videos (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        description TEXT,
        url VARCHAR(500) NOT NULL,
        thumbnail VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create index for better performance
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC)
    `);
    
    client.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Utility function to generate summary
export function generateSummary(content: string, maxLength: number = 200): string {
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  if (plainText.length <= maxLength) return plainText;
  
  const sentences = plainText.split(/[.!?]+/);
  let summary = '';
  
  for (const sentence of sentences) {
    if ((summary + sentence).length > maxLength) break;
    summary += sentence + '. ';
  }
  
  return summary.trim() || plainText.substring(0, maxLength) + '...';
}

// Database operations
export class BlogService {
  static async getAllBlogs(): Promise<BlogPost[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id,
          title,
          author,
          summary,
          content,
          image,
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM blogs 
        ORDER BY created_at DESC
      `);
      
      return result.rows.map(row => ({
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      }));
    } finally {
      client.release();
    }
  }

  static async getBlogById(id: string): Promise<BlogPost | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id,
          title,
          author,
          summary,
          content,
          image,
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM blogs 
        WHERE id = $1
      `, [id]);
      
      if (result.rows.length === 0) return null;
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async createBlog(blogData: {
    title: string;
    author: string;
    content: string;
    image?: string;
  }): Promise<BlogPost> {
    const client = await pool.connect();
    try {
      const id = `blog_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const summary = generateSummary(blogData.content);
      const now = new Date();
      
      const result = await client.query(`
        INSERT INTO blogs (id, title, author, summary, content, image, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING 
          id,
          title,
          author,
          summary,
          content,
          image,
          created_at as "createdAt",
          updated_at as "updatedAt"
      `, [
        id,
        blogData.title,
        blogData.author || 'By Yatish Kumar Goel, Advocate',
        summary,
        blogData.content,
        blogData.image || '/api/placeholder/600/400',
        now,
        now
      ]);
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async updateBlog(id: string, blogData: {
    title: string;
    author: string;
    content: string;
    image?: string;
  }): Promise<BlogPost | null> {
    const client = await pool.connect();
    try {
      const summary = generateSummary(blogData.content);
      const now = new Date();
      
      const result = await client.query(`
        UPDATE blogs 
        SET 
          title = $2,
          author = $3,
          summary = $4,
          content = $5,
          image = $6,
          updated_at = $7
        WHERE id = $1
        RETURNING 
          id,
          title,
          author,
          summary,
          content,
          image,
          created_at as "createdAt",
          updated_at as "updatedAt"
      `, [
        id,
        blogData.title,
        blogData.author,
        summary,
        blogData.content,
        blogData.image,
        now
      ]);
      
      if (result.rows.length === 0) return null;
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async deleteBlog(id: string): Promise<boolean> {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM blogs WHERE id = $1', [id]);
    //   return result.rowCount > 0;
      return (result.rowCount ?? 0) > 0;
    } finally {
      client.release();
    }
  }
}

export class VideoService {
  static async getAllVideos(): Promise<VideoPost[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id,
          title,
          description,
          url,
          thumbnail,
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM videos 
        ORDER BY created_at DESC
      `);
      
      return result.rows.map(row => ({
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      }));
    } finally {
      client.release();
    }
  }

  static async getVideoById(id: string): Promise<VideoPost | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id,
          title,
          description,
          url,
          thumbnail,
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM videos 
        WHERE id = $1
      `, [id]);
      
      if (result.rows.length === 0) return null;
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async createVideo(videoData: {
    title: string;
    description: string;
    url: string;
    thumbnail?: string;
  }): Promise<VideoPost> {
    const client = await pool.connect();
    try {
      const id = `video_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const now = new Date();
      
      const result = await client.query(`
        INSERT INTO videos (id, title, description, url, thumbnail, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING 
          id,
          title,
          description,
          url,
          thumbnail,
          created_at as "createdAt",
          updated_at as "updatedAt"
      `, [
        id,
        videoData.title,
        videoData.description || '',
        videoData.url,
        videoData.thumbnail || '',
        now,
        now
      ]);
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async updateVideo(id: string, videoData: {
    title: string;
    description: string;
    url: string;
    thumbnail?: string;
  }): Promise<VideoPost | null> {
    const client = await pool.connect();
    try {
      const now = new Date();
      
      const result = await client.query(`
        UPDATE videos 
        SET 
          title = $2,
          description = $3,
          url = $4,
          thumbnail = $5,
          updated_at = $6
        WHERE id = $1
        RETURNING 
          id,
          title,
          description,
          url,
          thumbnail,
          created_at as "createdAt",
          updated_at as "updatedAt"
      `, [
        id,
        videoData.title,
        videoData.description,
        videoData.url,
        videoData.thumbnail,
        now
      ]);
      
      if (result.rows.length === 0) return null;
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      };
    } finally {
      client.release();
    }
  }

  static async deleteVideo(id: string): Promise<boolean> {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM videos WHERE id = $1', [id]);
      return (result.rowCount ?? 0) > 0;
    } finally {
      client.release();
    }
  }
}
initializeDatabase().catch(console.error);

export default pool;