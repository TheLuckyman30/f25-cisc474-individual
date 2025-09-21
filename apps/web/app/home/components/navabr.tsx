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
    <div className="flex justify-between items-center fixed w-full h-fit p-10 bg-white shadow-md">
      <div>Site Page</div>
      <div className="flex items-center gap-15 rounded-md p-3 bg-gray-200/30">
        {NAV_LINKS.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </div>
      <div>Some button probably</div>
    </div>
  );
}

export default NavBar;
