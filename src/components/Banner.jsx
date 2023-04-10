import React from 'react';
import man from "/man.png"

const Banner = () => {
    return (
        
            <div className='flex p-5 md:p-0 flex-wrap md:flex-nowrap justify-between pt-10 gap-16 items-center container mx-auto'>
            <div className='pb-10'>
                <h2 style={{lineHeight: '90px'}} className='text-6xl md:text-7xl font-bold '>
                    Joblinker will <br />
                    help you to <br />
                    <span className='active'>build up career</span>
                </h2>
                <p className='mt-6'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn-primary mt-6 btn'>Get Started</button>

            </div>
            <div className=''>
                <img className='w-full px-10 h-auto' src={man} alt="man" />
            </div>
        </div>
      
    );
};

export default Banner;