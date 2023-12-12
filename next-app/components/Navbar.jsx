"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const links = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About', path: '/about' },
        { id: 3, label: 'Project', path: '/project' },
        { id: 4, label: 'Contact', path: '/contact' },
        { id: 7, label: 'Users', path: '/users' },
        { id: 5, label: 'Login', path: '/login' },
        { id: 6, label: 'Register', path: '/register' },
    ];

    const pathname = usePathname();

    return (
        <nav className='bg-slate-200 py-4 sticky top-0 left-0 w-full z-20'>
            <div className="container px-8 mx-auto flex justify-between items-center">
                <Link className='text-blue-500 text-3xl font-semibold' href={'/'}>Next JS</Link>
                <ul className=' gap-3 items-center hidden md:flex'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link href={link.path}
                                className={`${pathname === link.path && 'font-bold text-blue-500'}`}>
                                {link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;