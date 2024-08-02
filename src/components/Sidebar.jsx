import React from 'react';
import { FaHome, FaUser, FaBell, FaCog, FaClipboardCheck, FaCalendarCheck } from 'react-icons/fa';
import img from '../assets/f1.png';
import { FaArrowRightFromBracket, FaHouse, FaSquarePollVertical, FaWallet } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div className="bg-[#202028] text-white p-4 relative">
      <div className="flex items-center justify-center mb-8">
        <div className="h-10 w-10 mt-2">
          <img src={img} alt="" />
        </div>
      </div>
      <nav className="pl-2 pt-4">
        <ul className="flex flex-col gap-7">
          <li className="group cursor-pointer relative">
            <FaHouse size={24} className="group-hover:text-[#7195FE]" />
            <div className="absolute right-12 top-0 bottom-0 h-full w-1 bg-[#7195FE] opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="group cursor-pointer relative">
            <FaSquarePollVertical size={24} className="group-hover:text-[#7195FE]" />
            <div className="absolute right-12 top-0 bottom-0 h-full w-1 bg-[#7195FE] opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="group cursor-pointer relative">
            <FaClipboardCheck size={24} className="group-hover:text-[#7195FE]" />
            <div className="absolute right-12 top-0 bottom-0 h-full w-1 bg-[#7195FE] opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="group cursor-pointer relative">
            <FaWallet size={24} className="group-hover:text-[#7195FE]" />
            <div className="absolute right-12 top-0 bottom-0 h-full w-1 bg-[#7195FE] opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="group cursor-pointer relative">
            <FaCalendarCheck size={24} className="group-hover:text-[#7195FE]" />
            <div className="absolute right-12 top-0 bottom-0 h-full w-1 bg-[#7195FE] opacity-0 group-hover:opacity-100"></div>
          </li>
        </ul>
      </nav>
      <nav className="absolute bottom-8 pl-2 group cursor-pointer ">
        <FaArrowRightFromBracket size={24} className="group-hover:text-[#7195FE]">
        </FaArrowRightFromBracket>
      </nav>
    </div>
  );
};

export default Sidebar;
