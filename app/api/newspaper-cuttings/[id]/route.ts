import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { NewspaperCuttingService } from '@/lib/db';

async function checkAuth() {
  const session = await getServerSession();
  return session !== null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cutting = await NewspaperCuttingService.getNewspaperCuttingById(params.id);
    if (!cutting) {
      return NextResponse.json({ error: 'Newspaper cutting not found' }, { status: 404 });
    }

    return NextResponse.json(cutting);
  } catch (error) {
    console.error('Error fetching newspaper cutting:', error);
    return NextResponse.json({ error: 'Failed to fetch newspaper cutting' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { category, title, description, date, image } = body;

    if (!title || !date || !image) {
      return NextResponse.json(
        { error: 'Title, date, and image are required' },
        { status: 400 }
      );
    }

    const updatedCutting = await NewspaperCuttingService.updateNewspaperCutting(params.id, {
      category: category || '',
      title,
      description: description || '',
      date,
      image
    });

    if (!updatedCutting) {
      return NextResponse.json(
        { error: 'Newspaper cutting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCutting);
  } catch (error) {
    console.error('Error updating newspaper cutting:', error);
    return NextResponse.json(
      { error: 'Failed to update newspaper cutting' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const success = await NewspaperCuttingService.deleteNewspaperCutting(params.id);
    if (!success) {
      return NextResponse.json(
        { error: 'Newspaper cutting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Newspaper cutting deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting newspaper cutting:', error);
    return NextResponse.json(
      { error: 'Failed to delete newspaper cutting' },
      { status: 500 }
    );
  }
}