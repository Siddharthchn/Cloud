import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, color, rate, rateArrow: Arrow, rateArrowColor, iconColor, subColor, subColorIcon }) => {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg shadow-md flex'>
      <div className='w-full'>
        <div className='p-2 flex items-center justify-center rounded-lg w-12 h-12 relative' style={{backgroundColor: color}}>
          <Icon size={24} style={{ color: iconColor }}/>
          <div className='absolute bottom-1 right-1 rounded-full w-[14px] h-[14px] flex items-center justify-center' style={{ backgroundColor: subColor }}>
            <span className='text-[#ffffff] text-[11px]'>{subColorIcon}</span>
          </div>
        </div>
        <h4 className='text-md mt-3'>{title}</h4>
        <div className='flex items-center justify-between'>
          <p className='text-[32px] mt-3 font-bold'>{value}</p>
          <p className='flex gap-1 items-center text-lg font-semibold mt-4' style={{ color: rateArrowColor }}>
            <span><Arrow size={26}/></span>
            <span className='tracking-tighter'>{rate} %</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
