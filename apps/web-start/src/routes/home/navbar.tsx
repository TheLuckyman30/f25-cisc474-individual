import { Link, useLocation } from '@tanstack/react-router';

const NAV_LINKS: Array<string> = ['Dashboard', 'Calendar', 'Messages', 'Help'];

function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-between items-center fixed w-full h-fit p-5 bg-white/80 shadow-md backdrop-blur-md">
      <div>Site Page</div>
      <div className="flex items-center gap-15 rounded-md p-3 bg-gray-200/80">
        {NAV_LINKS.map((link, index) => {
          const newLink = `/home/${link.toLowerCase()}`;
          return (
            <Link
              to={newLink}
              className={`hover:text-blue-400 duration-75 cursor-pointer ${newLink === pathname ? 'text-blue-400' : ''}`}
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
