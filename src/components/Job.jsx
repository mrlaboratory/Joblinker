import React from 'react';
import locationimg from '/Icons/location.png'
import dollerimg from '/Icons/doller.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Job = ({id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary }) => {

    return (
        <div className='border rounded-lg p-10 mt-7'>
            <img className='w-4/12' src={company_logo} alt={company_name} />

            <h3 className='mt-6 font-bold text-2xl text-[#474747]'>{job_title}</h3>
            <h4 className='mt-3 text-xl text-[#757575]'>{company_name}</h4>
            <div className='flex mt-3 flex-wrap gap-2'>
                <p className='btn-outline-sm mr-2'>{remote_or_onsite}</p>
                <p className='btn-outline-sm'>{fulltime_or_parttime}</p>

            </div>
            <div className='flex mt-3 flex-wrap gap-2'>
                <div className='flex justify-start items-center mr-4 gap-1 text-[#757575]'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                    {location}</div>
                <div className='flex justify-start items-center gap-1 text-[#757575]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    {salary}</div>

            </div>
            <Link state={`${job_title} in ${company_name}`} to={`/job-details/${id}`}><button className='btn-ssm mt-5 btn btn-sm'>View details</button></Link>
        </div>
    );
};

export default Job;