import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const NavBar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 md:py-4">
      <Link legacyBehavior href="/">
        <a className="text-white text-xl font-bold">My Portfolio</a>
      </Link>
      <ul className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link legacyBehavior href={item.href}>
              <a className="text-white hover:text-gray-400 px-2 py-1 rounded-md">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button className="md:hidden focus:outline-none text-white text-xl hover:text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;