'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            <ul className="inline-flex items-center gap-5 border p-3 rounded-md">
                <li><Link className={`${pathname === '/products/phone' && 'border-b-2 border-b-blue-800 text-blue-950 font-bold'}`} href={'/products/phone'}>Phone</Link></li>
                <li><Link className={`${pathname === '/products/phone-case' && 'border-b-2 border-b-blue-800 text-blue-950 font-bold'}`} href={'/products/phone-case'}>Phone Case</Link></li>
                <li><Link className={`${pathname === '/products/watches' && 'border-b-2 border-b-blue-800 text-blue-950 font-bold'}`} href={'/products/watches'}>Watches</Link></li>
                <li><Link className={`${pathname === '/products/accessories' && 'border-b-2 border-b-blue-800 text-blue-950 font-bold'}`} href={'/products/accessories'}>Accessories</Link></li>
            </ul>
            {children}
        </>
    );
};

export default layout;