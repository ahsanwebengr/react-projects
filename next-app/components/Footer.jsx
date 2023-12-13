import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-white text-center py-3'>
            <p>© {new Date().getFullYear()} All right are reserved.</p>
        </footer>
    );
};

export default Footer;