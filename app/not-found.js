'use client';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

export default function NotFound() {
  return (
    <div className="not-found ">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-2xl text-white">Page Not Found!!</p>
      <Link
        href="/"
        className="mt-6 flex items-center gap-2 hover:scale-105 duration-300 border-2 bg-white/30 border-white px-5 py-4 rounded-3xl text-white"
      >
        Back to main page
        <BsArrowLeft />
      </Link>
    </div>
  );
}
