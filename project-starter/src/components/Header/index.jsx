import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data';

const Header = () => {
  return (
    <header className='container max-w-screen-2xl shadow-md py-4'>
      <nav className='flex justify-between items-center'>
        <h4 className=''>Header</h4>
        <ul className='flex gap-4'>
          {navLinks.map(nav => (
            <li key={nav?.id}>
              <NavLink to={nav?.path}>{nav?.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
