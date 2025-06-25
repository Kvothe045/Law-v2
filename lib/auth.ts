import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from './authOptions';

export async function checkAuth() {
  const session = await getServerSession(authOptions);
  return session !== null;
}

export function createAuthResponse() {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401 }
  )
}

// Add this function for API routes
export async function verifyApiRequest(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return createAuthResponse();
  }
  return null;
}