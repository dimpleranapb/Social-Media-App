'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {session ? (
          <>
            <p className="mb-4">Welcome, {session.user.name}</p>
            <img src={session.user.image} alt="User Image" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
