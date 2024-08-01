// src/components/NetProfitCard.js
import React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfitCard = () => {
  const value = 70;
  const text = "70% goal completed";

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between w-full">
      <div className="w-full">
        <h4 className="text-md">Net Profit</h4>
        <div className="flex flex-col mt-5">
          <p className="text-[35px] font-bold">$ 6759.25</p>
          <div className="flex items-center text-lg font-semibold mt-3 text-[#65D750]">
            <FaCaretUp size={26} />
            <span className="tracking-tighter ml-1">3%</span>
          </div>
        </div>
      </div>
      <div className='relative' style={{ width: 150, height: 140}}>
        <CircularProgressbar
          value={value}
          styles={buildStyles({
            // Colors
            pathColor: `rgba(62, 152, 199, ${value / 100})`,
            textColor: '#ffffff',
            trailColor: '#293368',
            backgroundColor: '#7396FF',
            strokeWidth: 12,  // Adjust this value to make the progress bar thicker
          })}
        />
        <div className="absolute top-[18%] text-center text-[13px] text-white mt-2">{text}</div>
        <div className='text-[11px] ml-2 mt-3'>*The values has been rounded off</div>
      </div>
    </div>
  );
};

export default NetProfitCard;
