'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS: string[] = ['Dashboard', 'Calendar', 'Messages', 'Help'];

function NavBar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center fixed w-full h-fit p-5 bg-white shadow-md">
      <div>Site Page</div>
      <div className="flex items-center gap-15 rounded-md p-3 bg-gray-200/30">
        {NAV_LINKS.map((link, index) => {
          const newLink = `/home/${link.toLowerCase()}`;
          return (
            <Link
              href={newLink}
              className={`hover:text-blue-400 duration-75 cursor-pointer ${newLink === pathName ? 'text-blue-400' : ''}`}
              key={index}
            >
              {link}
            </Link>
          );
        })}
      </div>
      <div>Some button probably</div>
    </div>
  );
}

export default NavBar;
