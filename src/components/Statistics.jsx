import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Header from './Header';
import Footer from './Footer';
const assignments = [
    { name: "Assignment 1", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 2", marks: 59, highestMarks: 60, passMark: 30 },
    { name: "Assignment 3", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 4", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 5", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 6", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 7", marks: 60, highestMarks: 60, passMark: 30 },
    { name: "Assignment 8", marks: 60, highestMarks: 60, passMark: 30 }
];
const Statistics = () => {

    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
                <h2 className='text-center font-bold text-3xl mt-5 mb-5'>Assignment marks - With ComposedChart</h2>

                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        data={assignments}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="marks" barSize={20} fill="#7E90FE" />
                    <Line type="monotone" dataKey="passMark" stroke="#9873FF" />
                    <Line type="step" dataKey="highestMarks" stroke="#139813" /> */}
                        <Area type="monotone" dataKey="marks" fill="#8884d854" stroke="#8884d854" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
            <div className='bg-black mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Statistics;