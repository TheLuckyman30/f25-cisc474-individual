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
      <div className="fixed flex gap-5 p-2 border border-blue-400 font-bold rounded-md">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={`/home/${link.toLowerCase()}`}
            key={index}
            onClick={() => setNewPage(index)}
            className={`p-1 hover:-translate-y-1 duration-200 rounded-md ${index === currentPage ? ' bg-blue-300' : ''}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
