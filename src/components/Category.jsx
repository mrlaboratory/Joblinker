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
        <div className='container mx-auto mt-32'>
            <h2 className='font-bold text-center text-5xl'>Job Category List</h2>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {
                    category.map(cat => {
                        return <div className='p-10 rounded-lg bg-gradient-to-r from-[#7e8ffe10] to-[#9873ff10]'>
                            <div className='w-[80px]'>
                                <img className='w-full p-3 bg-[#9873FF] rounded-lg' src={cat.image} alt={cat.designation} />
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