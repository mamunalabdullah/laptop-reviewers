import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className='uppercase my-12 text-2xl text-red-500 font-bold flex justify-center'>
            <CustomLink to="/home" className='mx-4'>home</CustomLink>
            <CustomLink to="/review" className='mx-4'>reviews</CustomLink>
            <CustomLink to="/dashboard" className='mx-4'>dashboard</CustomLink>
            <CustomLink to="/blog" className='mx-4'>blogs</CustomLink>
            <CustomLink to="/about" className='mx-4'>about</CustomLink>
        </nav>
    );
};

export default Navbar;