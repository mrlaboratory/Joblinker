import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex flex-col p-10 md:flex-row  justify-between md:pt-8 md:pb-5 container mx-auto'>
            
          <Link  state={'Home'}  to='/' >  <h2 className='text-[#1A1919] text-3xl font-bold'>Job Linkers</h2> </Link>
            <div className='flex flex-col p-10 md:flex-row md:p-0 text-left md:justify-center md:items-center'>
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
                <button className='btn-primary'>Start Applying</button>
            </div>

        </div>
    );
};

export default Header;