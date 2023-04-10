import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link, useLoaderData, useLocation, useParams, useSearchParams } from 'react-router-dom';
import vactor1 from '/Icons/vector1.png'
import vactor2 from '/Icons/vector2.png'
import { getShoppingCart } from '../utilities/fakedb';

const AppliedJobs = () => {
    const loc = useLocation()
    if (loc.state) {
        document.title = `${loc.state} - Job Linkers`
    }
    const [jobs, setJobs] = useState([])


    const storageData = getShoppingCart()
    const details = useLoaderData()
    useEffect(() => {
        const savedJobs = []
        for (const dd in storageData) {
            const savedJob = details.find(j => j.id == dd)
            if (savedJob) {
                savedJobs.push(savedJob)
            }
        }
        setJobs(savedJobs)
    }, [])

    const [filterBy, setFilterBy] = useState('remote');
    const handleSelectChange = (event) => {
        setFilterBy(event.target.value);
    }
    console.log(jobs.length)
    return (
        <div>
            <header className='relative bg-[#f9f9ff] min-h-[300px]'>
                <div className='relative z-10'>
                    <Header></Header>
                </div>
                <img className='absolute top-0 right-0 z-0' src={vactor1} alt="" />
                <img className='absolute bottom-0 left-0 z-0' src={vactor2} alt="" />


                {
                    loc.state ? <h2 className='font-bold text-center text-5xl py-10 text-[#7E90FE] relative z-10'>{loc.state}</h2> : ""
                }

            </header>
            <div className='container mx-auto p-5'>
                <div className="flex items-center justify-end">
                    
                    <select id="filter" value={filterBy} onChange={handleSelectChange} className="select select-bordered w-full max-w-[150px]">
                    <option selected>Filter by:</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div>
                    {
                        jobs.length == 0 ? <h2 className='text-center mt-10 text-3xl'>You haven't applied for a job yet</h2> : ''
                    }
                    {
                        jobs.map(job => {
                            return <div className='flex justify-between border mt-5 gap-5 p-5 rounded-lg'>
                                <div className='w-[240px] h-[240px] bg-[#F4F4F4] rounded-lg flex justify-center items-center'>
                                    <img className='w-full p-3 ' src={job.company_logo} alt="" />
                                </div>
                                <div className='flex grow justify-between text-[#474747]'>
                                    <div className='flex flex-col justify-center'>
                                        <h2 className='font-bold text-2xl '> {job.job_title}</h2>
                                        <h2 className='text-2xl mt-2'> {job.company_name}</h2>
                                        <div className='flex mt-3'>
                                            <p className='btn-outline-sm mr-2'>{job.remote_or_onsite}</p>
                                            <p className='btn-outline-sm'>{job.fulltime_or_parttime}</p>

                                        </div>
                                        <div className='flex mt-3'>
                                            <div className='flex justify-start items-center mr-4 gap-1 text-[#757575]'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                                {job.location}</div>
                                            <div className='flex justify-start items-center gap-1 text-[#757575]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                                {job.salary}</div>

                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <Link state={`${job.job_title} in ${job.company_name}`} className='btn-ssm btn' to={`/job-details/${job.id}`}> View Details </Link>
                                    </div>
                                </div>


                            </div>
                        })
                    }
                </div>
            </div>


        </div>
    );
};

export default AppliedJobs;