import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='relative flex flex-col p-10 md:flex-row  justify-between md:px-3 md:pt-8 md:pb-5 container mx-auto'>
            
                <Link state={'Home'} to='/' >  <h2 className='text-[#1A1919] text-3xl font-bold'>Job Linkers</h2> </Link>
                <div
                    className={(`${isOpen ? 'block' : 'hidden'} md:flex flex flex-col p-10 md:flex-row md:p-0 text-left md:justify-center md:items-center `)}
                >
                    <NavLink state={'Home'}
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className={({ isActive }) => (`${isActive ? 'active' : 'default'} text-[#757575] font-bold mr-8`)}

                    >
                        Home
                    </NavLink>
                    <NavLink state={'Statistics'}
                        to='/statistics'
                        aria-label='Statistics'
                        title='Statistics'
                        className={({ isActive }) => (`${isActive ? 'active' : 'default'} text-[#757575] font-bold mr-8`)}

                    >
                        Statistics
                    </NavLink>
                    <NavLink state={'Applied Jobs'}
                        to='/applied'
                        aria-label='Applied Jobs'
                        title='Applied Jobs'
                        className={({ isActive }) => (`${isActive ? 'active' : 'default'} text-[#757575] font-bold mr-8`)}

                    >
                        Applied Jobs
                    </NavLink>
                    <NavLink state={'Blog'}
                        to='/blog'
                        aria-label='Blog'
                        title='Blog'
                        className={({ isActive }) => (`${isActive ? 'active' : 'default'} text-[#757575] font-bold mr-8`)}

                    >
                        Blog
                    </NavLink>


                </div>

                <div>
                <HashLink to="/#featuredjobs" state="Featured Jobs"> <button className={`${isOpen ? 'block' : 'hidden'} btn btn-primary md:block duration-300`}>Start Applying</button> </HashLink>
                   
                </div>


            </div>

            <button onClick={() => setIsOpen(!isOpen)} className='absolute block md:hidden right-10 top-10'>
                {
                    isOpen ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                }
               

               


            </button>
        </div>
    );
};

export default Navbar;