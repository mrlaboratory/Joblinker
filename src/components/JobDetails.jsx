import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Header from './Header';
import vactor1 from '/Icons/vector1.png'
import vactor2 from '/Icons/vector2.png'
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import Footer from './Footer';

const JobDetails = () => {
    const [applied, setApplied] = useState(false)
    const loc = useLocation()
    if (loc.state) {
        document.title = `${loc.state} - Job Linkers`
    }
    const details = useLoaderData()
    const { id } = useParams()
    const { company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information

    } = details.find(job => job.id == id)

    const applyNow = (id) => {
        setApplied(id)
        addToDb(id)
    }
    const storageData = getShoppingCart()
    useEffect(() => {
        for (const dd in storageData) {
            if (dd == id) {
                setApplied(true)
            }
        }
    }, [])
    // console.log(storageData)
    // const exist = storageData
    // if(exist){
    //     setApplied(true)
    // }

    return (
        <div className=''>
          
                    <Header></Header>
              
            <div className='p-5 md:p-0'>
                <div className='mt-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 '>
                    <div className='md:col-span-2'>
                        <p className='mt-5'><span className='font-bold'>Job Description : </span> {job_description}</p>
                        <p className='mt-5'><span className='font-bold '>Job Responsibility : </span> {job_responsibility}</p>
                        <p className='mt-5'><span className='font-bold '>Educational Requirements : </span> <br /> {educational_requirements}</p>
                        <p className='mt-5'><span className='font-bold '>Experiences : </span> <br /> {experiences}</p>
                    </div>
                    <div>
                        <div className='p-8 bg-gradient-to-r  from-[#7e8ffe10] to-[#9873ff10] rounded-lg'>
                            <h3 className='font-bold pb-5 text-2xl border-b-2'>Job Details</h3>
                            <div className='text-[#474747] pt-3'>
                                <p className='flex items-center text-md md:text-xl mb-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-[#7E90FE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                    <span className='font-bold mr-1'>Salary : </span>  {salary}</p>
                                <p className='flex items-center text-md md:text-xl' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-[#7E90FE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                    <span className='font-bold mr-1'>Job Title :</span>  {job_title}</p>
                            </div>

                            <h3 className='font-bold pb-5 text-xl border-b-2 mt-10  text-2xl'>Contact Information</h3>
                            <div className='text-[#474747] pt-3'>
                                <p className='flex items-center text-md md:text-xl mb-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-[#7E90FE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                    <span className='font-bold mr-1'>Phone : </span>  {contact_information.phone}</p>
                                <p className='flex items-center text-md md:text-xl mb-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-[#7E90FE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                    <span className='font-bold mr-1'>Email :</span>  {contact_information.email}</p>
                                <p className='flex items-center text-md md:text-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-[#7E90FE]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                    <span className='font-bold mr-1'>Address :</span>  {location}</p>
                            </div>

                        </div>
                        <button onClick={() => applyNow(id)} disabled={applied ? true : false} className='btn-primary w-full mt-10'>{applied ? "Applied" : "Apply Now "}</button>
                    </div>

                </div>
            </div>


            <div className='bg-black mt-10'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default JobDetails;