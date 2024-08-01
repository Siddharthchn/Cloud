import React from 'react';
import { FaHome, FaUser, FaBell, FaCog, FaClipboardCheck, FaCalendarCheck } from 'react-icons/fa';
import img from '../assets/f1.png'
import { FaArrowRightFromBracket, FaHouse, FaSquarePollVertical, FaWallet } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div className=" bg-[#202028] text-white p-4 relative">
      <div className="flex items-center justify-center mb-8">
        <div className='h-10 w-10 mt-2'>
          <img src={img} alt="" />
        </div>
      </div>
      <nav className='pl-2 pt-4'>
        <ul className='flex flex-col gap-7'>
          <li className='cursor-pointer'><FaHouse size={24} /></li>
          <li className='cursor-pointer'><FaSquarePollVertical size={24} /></li>
          <li className='cursor-pointer'><FaClipboardCheck size={24} /></li>
          <li className='cursor-pointer'><FaWallet size={24} /></li>
          <li className='cursor-pointer'><FaCalendarCheck size={24} /></li>
        </ul>
      </nav>
      <nav className="absolute bottom-8 pl-2">
        <FaArrowRightFromBracket size={24}  className='cursor-pointer'/>
      </nav>
    </div>
  );
};

export default Sidebar;
