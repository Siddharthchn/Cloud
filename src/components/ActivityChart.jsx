import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  // Add more data points here
];

const ActivityChart = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg mb-4">Activity</h4>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
