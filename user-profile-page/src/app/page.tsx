// pages/index.jsx
import React from 'react';
import UserProfile from '../app/components/userProfile';
import 'tailwindcss/tailwind.css';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserProfile />
    </main>
  );
}
