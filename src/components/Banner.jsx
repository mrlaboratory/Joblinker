import React from 'react';
import man from "/man.png"

const Banner = () => {
    return (
        
            <div className='flex flex-wrap md:flex-nowrap justify-between gap-16 items-center container mx-auto'>
            <div>
                <h2 style={{lineHeight: '90px'}} className='text-7xl font-bold '>
                    Joblinker will <br />
                    help you to <br />
                    <span className='active'>build up career</span>
                </h2>
                <p className='mt-6'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn-primary mt-6'>Get Started</button>

            </div>
            <div>
                <img src={man} alt="man" />
            </div>
        </div>
      
    );
};

export default Banner;