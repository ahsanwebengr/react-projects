import Link from 'next/link';
import React from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <header className='bg-gray-900 text-white  py-8'>
      <div className='container flex justify-between items-center'>
        <h2>LOGO</h2>
        <nav>
          <ul className='flex items-center gap-6'>
            {navLinks?.map(({ label, path }) => (
              <li>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
