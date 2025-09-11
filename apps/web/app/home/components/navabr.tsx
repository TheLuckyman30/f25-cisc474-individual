import Link from 'next/link';

const NAV_LINKS: string[] = ['Dashboard', 'Calendar', 'Messages', 'Help'];

function NavBar() {
  return (
    <div>
      {NAV_LINKS.map((link, index) => (
        <Link href={`/home/${link.toLowerCase()}`} key={index}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
