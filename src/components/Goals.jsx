import React from 'react'
import { FaBullseye } from 'react-icons/fa'
import { FaBowlFood, FaBurger } from 'react-icons/fa6'

const Goals = () => {
  return (
    <div className='text-white flex flex-col justify-between w-full p-2 md:p-1 lg:p-2'>
        <div className='flex flex-col gap-4 md:gap-10 lg:gap-4'>
            {/* goal */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5 md:gap-3 lg:gap-5'>
                    <div className='bg-[#5F3237] w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full'>
                        <FaBullseye size={24} className='text-[#CD5B26]'/>
                        </div>
                        <div className='text-lg md:text-base lg:text-lg font-semibold'>Goals</div>
                </div>
                <div className='bg-[#47484D] w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <span className='text-xl md:text-lg lg:text-xl font-bold'>&gt;</span>
                </div>
            </div>
            {/* popular dishes */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5 md:gap-3 lg:gap-5'>
                    <div className='bg-[#293368] w-16 h-16 md:w-16 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full'>
                        <FaBurger size={24} className='text-[#5C77D1]'/>
                        </div>
                        <div className='text-lg md:text-base lg:text-lg  font-semibold'>Popular Dishes</div>
                </div>
                <div className='bg-[#47484D] w-10 h-10 md:w-9 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <span className='text-xl md:text-lg lg:text-xl font-bold'>&gt;</span>
                </div>
            </div>
            {/* menus */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5 md:gap-3 lg:gap-5'>
                    <div className='bg-[#214A60] w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full'>
                        <FaBowlFood size={24} className='text-[#2397CB]'/>
                        </div>
                        <div className='text-lg md:text-base lg:text-lg  font-semibold'>Menus</div>
                </div>
                <div className='bg-[#47484D] w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <span className='text-xl md:text-lg lg:text-xl font-bold'>&gt;</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals