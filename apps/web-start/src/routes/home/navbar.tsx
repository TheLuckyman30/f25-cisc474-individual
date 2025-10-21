import { Link } from '@tanstack/react-router';

const NAV_LINKS: Array<string> = [
  'Dashboard',
  'Calendar',
  'Messages',
  'Help',
  'Creation Center',
];

function NavBar() {
  return (
    <div className="flex justify-between items-center fixed w-full h-fit p-5 bg-white/80 shadow-md backdrop-blur-md">
      <div>Site Page</div>
      <div className="flex items-center gap-15 rounded-md p-3 bg-gray-200/80">
        {NAV_LINKS.map((link, index) => {
          const newLink = `/home/${link.toLowerCase().replace(' ', '')}`;
          return (
            <Link
              to={newLink}
              className={
                'hover:text-blue-400 duration-75 cursor-pointer [&.active]:text-blue-400'
              }
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
