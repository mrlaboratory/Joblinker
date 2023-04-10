import React from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import Header from './Header';
import vactor1 from '/Icons/vector1.png'
import vactor2 from '/Icons/vector2.png'

const JobDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, job_description, job_responsibility, educational_requirements, experiences

    } = details.find(job => job.id == id)


    return (
        <div className=''>
            <header className='relative bg-[#f9f9ff] min-h-[300px]'>
                <div className='relative z-10'>
                    <Header></Header>
                </div>
                <img className='absolute top-0 right-0 z-0' src={vactor1} alt="" />
                <img className='absolute bottom-0 left-0 z-0' src={vactor2} alt="" />

                <h2 className='font-bold text-center text-5xl py-10 relative z-10'>Job Details</h2>

            </header>
            <div className='p-5 md:p-0'>
                <div className='mt-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 '>
                    <div className='md:col-span-2'>
                        <p className='mt-5'><span className='font-bold'>Job Description</span> {job_description}</p>
                        <p className='mt-5'><span className='font-bold '>Job Responsibility</span> {job_responsibility}</p>
                        <p className='mt-5'><span className='font-bold '>Educational Requirements:</span> <br /> {educational_requirements}</p>
                        <p className='mt-5'><span className='font-bold '>Experiences:</span> <br /> {experiences}</p>
                    </div>
                    <div>
                        <h2>job details </h2>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default JobDetails;