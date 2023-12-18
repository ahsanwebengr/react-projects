'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            <div className="tabs tabs-boxed mx-auto max-w-md">
                <Link className={`${pathname === '/products/phone' ? 'tab-active tab' : 'tab'}`} href={'/products/phone'}>Phone</Link>
                <Link className={`${pathname === '/products/phonecase' ? 'tab-active tab' : 'tab'}`} href={'/products/phonecase'}>Phone Case</Link>
                <Link className={`${pathname === '/products/watch' ? 'tab-active tab' : 'tab'}`} href={'/products/watch'}>Watch</Link>
                <Link className={`${pathname === '/products/accessories' ? 'tab-active tab' : 'tab'}`} href={'/products/accessories'}>Accessories</Link>
            </div>

            <section className="py-8">{children}</section>
        </>
    );
};

export default layout;