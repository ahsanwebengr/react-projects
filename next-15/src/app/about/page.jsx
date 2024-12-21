'use client';

import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-6'>
      <h2 className='text-3xl text-center font-bold'>
        Subscribe to us for the latest version of React
      </h2>
      <button
        className='px-4 py-2 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition'
        onClick={() => router.push('/admin/dashboard')}
      >
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default About;
