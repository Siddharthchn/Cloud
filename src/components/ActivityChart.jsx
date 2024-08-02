import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { name: 5, value: 12000 },
  { name: 7, value: 3000 },
  { name: 9, value: 14000 },
  { name: 11, value: 7800 },
  { name: 13, value: 11000 },
  { name: 15, value: 2390 },
  { name: 17, value: 15490 },
  { name: 19, value: 7560 },
  { name: 21, value: 3760 },
  { name: 23, value: 14900 },
  { name: 25, value: 12480 },
  { name: 27, value: 3090 },
];

const monthlyData = [
  { name: 'Jan', value: 30000 },
  { name: 'Feb', value: 20000 },
  { name: 'Mar', value: 27800 },
  { name: 'Apr', value: 18900 },
  { name: 'May', value: 23900 },
  { name: 'Jun', value: 34900 },
  { name: 'Jul', value: 20000 },
  { name: 'Aug', value: 27800 },
  { name: 'Sep', value: 18900 },
  { name: 'Oct', value: 23900 },
  { name: 'Nov', value: 34900 },
  { name: 'Dec', value: 40000 },
];

const yearlyData = [
  { name: '2019', value: 300000 },
  { name: '2020', value: 200000 },
  { name: '2021', value: 278000 },
  { name: '2022', value: 189000 },
  { name: '2023', value: 239000 },
  { name: '2024', value: 349000 },
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#888">{payload.value}</text>
    </g>
  );
};

const CustomizedYAxisTick = (props) => {
  const { x, y, payload } = props;
  if (payload.value === 15000) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={-5} y={0} dy={4} textAnchor="end" fill="#888">15k</text>
      </g>
    );
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-5} y={0} dy={4} textAnchor="end" fill="#888">{payload.value / 1000}k</text>
    </g>
  );
};

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 8;
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
  );
};

const ActivityChart = () => {
  const [data, setData] = useState(weeklyData);
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "Weekly") {
      setData(weeklyData);
    } else if (value === "Monthly") {
      setData(monthlyData);
    } else if (value === "Yearly") {
      setData(yearlyData);
    }
  };

  return (
    <div className="p-4 bg-[#202028] rounded-lg">
      <div className='flex items-center justify-between'>
        <h4 className="text-white text-lg mb-4">Activity</h4>
        <div className='relative'>
          <select 
            value={selectedOption} 
            onChange={handleSelectChange} 
            className='appearance-none px-8 py-2 rounded-3xl text-[#ffffff] bg-[#4B4C51] border-[1px] border-[#777676] focus:outline-none cursor-pointer'
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
            <FaCaretDown className='text-white' />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis tick={<CustomizedYAxisTick />} domain={[0, 'auto']} />
          <Tooltip />
          <Bar dataKey="value" fill="#7394FF" barSize={30} shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
