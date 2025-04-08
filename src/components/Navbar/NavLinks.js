import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const location = useLocation();

    return (
        <>
            <HashLink className={`px-4 font-extrabold text-gray-500 hover:text-blue-900 ${location.pathname === '/' ? "active" : ""}`} smooth to="/#about">
                About
            </HashLink>
            {/* <HashLink className={`px-4 font-extrabold text-gray-500 hover:text-blue-900 ${location.pathname.includes('/') ? "active" : ""}`} smooth to="/#services">
                Services
            </HashLink> */}
            <HashLink className={`px-4 font-extrabold text-gray-500 hover:text-blue-900 ${location.pathname === '/product' ? "active" : ""}`} to="/product">
                Product
            </HashLink>
            <HashLink className={`px-4 font-extrabold text-gray-500 hover:text-blue-900 ${location.pathname === '/contact' ? "active" : ""}`} to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
