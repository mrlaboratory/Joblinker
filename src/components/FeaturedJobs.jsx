import React, { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [limit, setLimit] = useState(false)

    useEffect(() => {
        fetch('jobdata.json')
            .then(res => res.json())
            .then(data => limit ? setJobs(data) : setJobs(data.slice(0, 4)))
    }, [limit]);
    console.log(jobs)
    return (
        <div className='container mx-auto mt-32 p-5 md:p-0'>
            <h2 className='font-bold text-center text-5xl'>Featured Jobs</h2>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    jobs.map((job, i) => <Job key={i} {...job}></Job>)
                }

            </div>
           {
            !limit ?  <div className='mt-5 flex justify-center items-center'>
            <button onClick={()=> setLimit(true)} className='btn-primary btn'>See All Jobs</button>
        </div> : ''
           }

        </div>

    );
};

export default FeaturedJobs;