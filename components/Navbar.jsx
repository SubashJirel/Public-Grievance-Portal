import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <ClipboardListIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Grievance Portal</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/form">
            File a Grievance
          </Link>
          <Link className="hover:underline" href="/status">
            View Status
          </Link>
          <Link className="hover:underline" href="#">
            Contact Us
          </Link>
        </nav>
        <Button className="md:hidden" variant="outline">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
    </>
  );
}

function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
