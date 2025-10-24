import { useAuth0 } from '@auth0/auth0-react';
import { Link } from '@tanstack/react-router';

const NAV_LINKS: Array<string> = [
  'Dashboard',
  'Calendar',
  'Messages',
  'Help',
  'Creation Center',
];

function NavBar() {
  const { logout } = useAuth0();
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
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="hover:text-blue-400 duration-75 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default NavBar;
