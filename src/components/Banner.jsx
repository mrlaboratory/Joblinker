import React from 'react';
import man from "/man.png"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        
            <div className='flex p-5 md:p-3 flex-wrap md:flex-nowrap justify-between pt-10 gap-16 items-center container mx-auto'>
            <div className='pb-10 md:max-w-[50%]'>
                <h2  className='text-4xl leading-[40px] md:leading-[80px] sm:text-5xl md:text-7xl font-bold '>
                    Joblinker will <br />
                    help you to <br />
                    <span className='active'>Find Your Dream</span>
                </h2>
                <p className='mt-6 '>
                Looking for your dream job? JobLinker has got you covered! With thousands of job opportunities available, you can explore them all and find the one that's perfect for you. Get all the information you need to make the best decision for your future with JobLinker. Don't wait, start your search today and take the first step towards your dream job!
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