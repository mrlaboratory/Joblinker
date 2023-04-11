import React from 'react';
import Banner from './Banner';
import Category from './Category';
import FeaturedJobs from './FeaturedJobs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-[#f9f9ff] pt-10'>
                <Banner></Banner>
            </div>
            <section>
                <Category></Category>
            </section>
            <section id='featuredjobs'>
                <FeaturedJobs></FeaturedJobs>
            </section>
           
        </div>
    );
};

export default Home;