import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='flex justify-center items-center m-12'>
            <div>
                <div>
                    <h1 className='text-2xl m-7'>Chart showing Investment</h1>
                </div>
                <div>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="investment" stroke="#ec4899" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-2xl m-7'>Chart showing sells</h1>
                </div>
                <div>
                    <BarChart width={600} height={300} data={data}>
                        <Bar dataKey="sell" fill="#ec4899" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;