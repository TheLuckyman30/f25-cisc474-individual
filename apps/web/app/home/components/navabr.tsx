'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS: string[] = ['Dashboard', 'Calendar', 'Messages', 'Help'];

function NavBar() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  function setNewPage(index: number) {
    setCurrentPage(index);
  }

  return (
    <div className="flex justify-center">
      <div className="fixed flex gap-5 p-2 bg-blue-500 text-white font-bold rounded-md">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={`/home/${link.toLowerCase()}`}
            key={index}
            onClick={() => setNewPage(index)}
            className={`p-1 ${index === currentPage ? 'rounded-md bg-blue-400' : ''}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
