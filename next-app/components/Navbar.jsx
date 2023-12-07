"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const links = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About', path: '/about' },
        { id: 3, label: 'Project', path: '/project' },
        { id: 4, label: 'Contact', path: '/contact' },
    ];

    const pathname = usePathname();

    return (
        <nav className='bg-slate-200 py-4'>
            <div className="container max-w-6xl mx-auto flex justify-between items-center">
                <Link href={'/'}>Logo</Link>
                <ul className='flex gap-3 items-center'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link href={link.path} className={`${pathname === link.path && 'font-bold text-blue-500'}`}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;