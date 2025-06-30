import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { NewspaperCuttingService } from '@/lib/db';

async function checkAuth() {
  const session = await getServerSession();
  return session !== null;
}

export async function GET(request: NextRequest) {
  try {
    const cuttings = await NewspaperCuttingService.getAllNewspaperCuttings();
    return NextResponse.json(cuttings);
  } catch (error) {
    console.error('Error fetching newspaper cuttings:', error);
    return NextResponse.json({ error: 'Failed to fetch newspaper cuttings' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { category, title, description, date, image } = body;

    if (!title || !date || !image) {
      return NextResponse.json({ error: 'Title, date, and image are required' }, { status: 400 });
    }

    const newCutting = await NewspaperCuttingService.createNewspaperCutting({
      category: category || '',
      title,
      description: description || '',
      date,
      image
    });

    return NextResponse.json(newCutting, { status: 201 });
  } catch (error) {
    console.error('Error creating newspaper cutting:', error);
    return NextResponse.json({ error: 'Failed to create newspaper cutting' }, { status: 500 });
  }
}