// src/components/NetProfitCard.js
import React, { useEffect, useState } from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfitCard = () => {
    const [progress, setProgress] = useState(0);
    const targetValue = 70;
  const text = "70% goal";

  useEffect(() => {
    setTimeout(() => {
      setProgress(targetValue);
    }, 500); // Delay to start the animation
  }, [targetValue]);

  return (
    <div className="text-white p-4 flex flex-row md:flex-col xl:flex-row  justify-between w-full">
      <div className="w-full">
        <h4 className="text-md">Net Profit</h4>
        <div className="flex flex-col justify-start md:justify-between xl:justify-start md:flex-row xl:flex-col mt-5">
          <p className="xl:text-[35px] lg:text-[34px] md:text-[22px] text-[26px] font-bold">$6759.25</p>
          <div className="flex items-center text-lg font-semibold mt-3 md:mt-0 xl:mt-2 text-[#65D750]">
            <FaCaretUp size={26} />
            <span className="tracking-tighter ml-1 md:ml-0 xl:ml-1">3%</span>
          </div>
        </div>
      </div>
      <div className='relative w-[120px] h-[100px] md:w-[140px] md:h-[120px] lg:w-[160px] lg:h-[140px] md:mt-10 700-800:ml-[13px] 800-900:ml-[18px] 900-1024:ml-[36px] lg:mt-8 lg:ml-[46px] xl:mt-0 xl:ml-0'>
        <CircularProgressbar
        value={progress}
          styles={buildStyles({
            // Colors
            pathColor: `rgba(62, 152, 199, ${progress / 100})`,
            textColor: '#ffffff',
            trailColor: '#293368',
            backgroundColor: '#7195FE',
            strokeWidth: 12,  // Adjust this value to make the progress bar thicker
          })}
        />
        <div className="absolute top-[18%] left-[18%] md:top-[36%] md:left-[30%] lg:top-[36%] lg:left-[26%] xl:top-[21%] xl:left-[21%] text-center text-[11px] lg:text-[16px] xl:text-[13px] text-white mt-2">{text} <br /> completed</div>
        <div className='xl:text-[10px] md:text-[12px] lg:text-[13px] text-[9.5px] lg:ml-[20px] md:ml-[18px] ml-[-12px] mt-3 md:mt-5 lg:mt-3 xl:ml-[6px] xl:mt-2'>*The values here has been rounded off</div>
      </div>
    </div>
  );
};

export default NetProfitCard;
