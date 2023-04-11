import React, { useEffect, useState } from 'react';
import accounts from '/accounts.png'

const Category = () => {
    const [category, setCatgory] = useState([])


    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCatgory(data))
    }, []);

    console.log(category)
    return (
        <div className='container mx-auto mt-32 p-5'>
            <h2 className='font-bold text-center text-5xl'>Job Category List</h2>
            <p className='text-center mt-3'>Looking for your dream job? JobLinker has got you covered! With thousands of job opportunities available, you can explore them all and find the one that's perfect for you. Get all the information you need to make the best decision for your future with JobLinker. Don't wait, start your search today and take the first step towards your dream job! </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {
                    category.map(cat => {
                        return <div className='p-10 rounded-lg bg-gradient-to-r from-[#7e8ffe10] to-[#9873ff10]'>
                            <div className='w-[80px]'>
                                <img className='w-full p-3 bg-[#9873ff61] rounded-lg' src={cat.image} alt={cat.designation} />
                            </div>
                            <h3 className='text-xl font-bold mt-6'>{cat.designation}</h3>
                            <p>{cat.count} Jobs Available</p>

                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Category;