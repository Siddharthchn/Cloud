import React from 'react';
import { FaBell, FaEnvelope, FaSearch, FaUserCircle } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import img from '../assets/profile.png'

const Navbar = () => {
  return (
    <div className="bg-[#202028] text-white flex justify-between items-center p-5">
      <div className="relative flex items-center mr-6 md:mr-0">
        <FaSearch className="absolute left-3 text-[#ffffff] cursor-pointer" />
        <input 
          className="bg-[#2A2B30] pl-10 pr-4 py-2 rounded focus:outline-none text-[#ffffff] placeholder-[#ffffff] " 
          type="text" 
          placeholder="Search" 
        />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex gap-2 md:gap-4'>
        <div className='bg-[#46474C] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>
            <FaEnvelope />
        </div>
        <div className='bg-[#46474C] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>
            <FaGear />
        </div>
        <div className='relative bg-[#46474C] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>
            <FaBell />
            {/* Notification dot */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
        <div className='md:ml-6 ml-2'>
      <div className="bg-[#46474C] rounded-full md:w-14 md:h-14 w-12 h-12 flex items-center justify-center cursor-pointer">
        <img src={img} alt="Profile image" className='w-full h-full object-contain' />      
      </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
