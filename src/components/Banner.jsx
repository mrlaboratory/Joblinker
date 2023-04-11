import React from 'react';
import man from "/man.png"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        
            <div className='flex p-5 md:p-3 flex-wrap md:flex-nowrap justify-between pt-10 gap-16 items-center container mx-auto'>
            <div className='pb-10'>
                <h2  className='text-4xl leading-[40px] md:leading-[80px] sm:text-5xl md:text-7xl font-bold '>
                    Joblinker will <br />
                    help you to <br />
                    <span className='active'>Find Your Dream</span>
                </h2>
                <p className='mt-6'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it your dream . Manage all your job application from start to finish.
                </p>
                <HashLink to="#featuredjobs" >
                <button className='btn-primary mt-6 btn'>Get Started</button>
                </HashLink>
               

            </div>
            <div className=''>
                <img className='w-full px-10 h-auto' src={man} alt="man" />
            </div>
        </div>
      
    );
};

export default Banner;