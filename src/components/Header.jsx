import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import vactor1 from '/Icons/vector1.png'
import vactor2 from '/Icons/vector2.png'

const Header = ({children}) => {
    const loc = useLocation()
    if (loc.state) {
        document.title = `${loc.state} - Job Linkers`
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='relative bg-[#f9f9ff] min-h-[300px]'>
        <div className='relative z-10'>
            <Navbar></Navbar>
        </div>
        <img className='absolute top-0 right-0 z-0' src={vactor1} alt="" />
        <img className='absolute bottom-0 left-0 z-0' src={vactor2} alt="" />


       <h2 className='font-bold text-center text-5xl py-10 text-[#7E90FE] relative z-10'>{children}</h2>

    </header>
    );
};

export default Header;