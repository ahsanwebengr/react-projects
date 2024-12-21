'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const AdminLayout = ({ children }) => {
  const currentPath = usePathname();
  return (
    <div className='grid grid-cols-[300px_1fr] gap-2'>
      <ul className='shadow-md border-r h-96'>
        <li
          className={`${
            currentPath === '/admin/dashboard' ? 'bg-gray-700 text-white' : null
          } w-full p-3  mb-1 hover:bg-slate-200`}
        >
          <Link href='/admin/dashboard'>Dashboard</Link>
        </li>
        <li
          className={`${
            currentPath === '/admin/settings' ? 'bg-gray-700 text-white' : null
          } w-full p-3  mb-1 hover:bg-slate-200`}
        >
          <Link href='/admin/settings'>Settings</Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
