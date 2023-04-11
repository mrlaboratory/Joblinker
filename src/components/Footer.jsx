import React from 'react';
import group from '/Icons/group.png'

const Footer = () => {
    return (
        <div className='container mx-auto p-5 text-white'>
            <div className='grid grid-cols-2 md:grid-cols-5  gap-10 py-[130px] md:gap-20 border-gray-400 border-b-2'>
                <div>
                    <h2 className='font-bold text-xl'>Job Linkers</h2>
                    <p className='text-[#FFFFFFB2] mt-2'>
                        There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                    </p>
                    <img className='mt-3 w-full max-w-[150px]' src={group} alt="" />

                </div>
                <div>
                    <h2 className='font-bold'>Company</h2>
                    <ul className='text-[#FFFFFFB2] mt-2'>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Product</h2>
                    <ul className='text-[#FFFFFFB2] mt-2'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Support</h2>
                    <ul className='text-[#FFFFFFB2] mt-2'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Contact</h2>
                    <ul className='text-[#FFFFFFB2] mt-2'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>

                    </ul>
                </div>

            </div>
            <br />
            <div className='flex justify-between'>

                <p>@2023 Joblinkers. All Rights Reserved</p>
                <p>Powered by Joblinkers</p>

            </div>
        </div>
    );
};

export default Footer;