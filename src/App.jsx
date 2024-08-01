// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardCard from './components/DashboardCard';
import ActivityChart from './components/ActivityChart';
import RecentOrders from './components/RecenetOrders';
import CustomerFeedback from './components/CustomerFeedback';
import NetProfitCard from './components/NetProfitCard'
import { dashboardCardData } from './data/dashboardCardData';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-[#141416]">
        <Navbar />
        <div className="px-6 pt-6 pb-2">
          <h1 className="text-3xl font-bold text-[#ffffff]">Dashboard</h1>
        </div>
        <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Dashboard Cards and Large Card in the same row */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardCardData.map((card, index) => (
              <DashboardCard
                key={index}
                title={card.title}
                value={card.value}
                rate={card.rate}
                rateArrow={card.rateArrow}
                rateArrowColor={card.rateArrowColor}
                icon={card.icon}
                color={card.color}
                iconColor={card.iconColor}
                subColor={card.subColor}
                subColorIcon={card.subColorIcon}
              />
            ))}
          </div>
          <div className="md:col-span-4 bg-gray-800 text-white p-4 rounded-lg shadow-md">
         <NetProfitCard />
          </div>
        </div>
        <div className="px-6 py-3 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <ActivityChart />
          </div>
          <div className="md:col-span-4 bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg mb-4">Goals</h4>
            <p>Popular Dishes</p>
            <p>Menus</p>
          </div>
        </div>
        <div className="px-6 py-3 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <RecentOrders />
          </div>
          <div className="md:col-span-4">
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
