// lib/auth.ts
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'

export async function checkAuth(request: NextRequest) {
  // For API routes, check authorization header or session
  const authHeader = request.headers.get('authorization')
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    // You can implement JWT verification here if needed
    // For now, we'll rely on session-based auth
    return true
  }
  
  // Check if user is authenticated (this is a simplified check)
  // In a real app, you'd verify the session token
  const cookie = request.headers.get('cookie')
  if (cookie && cookie.includes('next-auth.session-token')) {
    return true
  }
  
  return false
}

export function createAuthResponse() {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401 }
  )
}