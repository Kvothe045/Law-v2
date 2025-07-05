// app/login/page.tsx
"use client";

import React, { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LockIcon, UserIcon, EyeIcon, EyeOffIcon, KeyIcon } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        await getSession();
        router.push('/admin');
        router.refresh();
      }
    } catch (error) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setResetMessage('Error sending reset email. Please try again.');
      } else {
        setResetMessage('Password reset email sent! Check your inbox.');
        setShowPasswordReset(false);
        setResetEmail('');
      }
    } catch (error) {
      setResetMessage('An error occurred. Please try again.');
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-200">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <LockIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Admin Login</h1>
            <p className="text-slate-600">Access the blog management system</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          {resetMessage && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-blue-700 text-sm font-medium">{resetMessage}</p>
            </div>
          )}

          {!showPasswordReset ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-3">
                  Email
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-3">
                  Password
                </label>
                <div className="relative">
                  <LockIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full pl-12 pr-12 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-4 rounded-2xl font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowPasswordReset(true)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center gap-2 mx-auto"
                >
                  <KeyIcon className="w-4 h-4" />
                  Forgot Password?
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-800"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={resetLoading}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {resetLoading ? 'Sending...' : 'Send Reset Email'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowPasswordReset(false)}
                  className="text-slate-600 hover:text-slate-800 text-sm font-medium"
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              Authorized personnel only. Session expires on browser close.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
