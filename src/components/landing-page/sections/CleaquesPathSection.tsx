import React from 'react'
import Image from 'next/image'

const CleaquesPath = () => {
  return (
    <div className=" px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 text-[#fdf3e2]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
        <div className="flex md:hidden w-full h-[2px] bg-[#FDF3E2] mb-6"></div>
        <div className="flex-1 hidden md:flex items-center justify-between">
          <div className="w-full h-[1px] bg-[#FDF3E2]"></div>
        </div>

        <div className="md:text-right text-center mx-auto md:mx-0">
          <h1 className="text-[28px] md:text-[32px] font-[600] text-[#f7c31f]">
            The Cleaques Path
          </h1>
          <p className="text-sm md:text-base mt-1 max-w-[462px] md:ml-auto">
            We’re here to make travel for the diaspora simple, soulful, and seamless — in a few steps.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-[40px] md:text-[48px] text-[#FDF3E2]" >0<span className='text-[#2c8af6]'>1</span></h1>
          <p className="text-[22px] md:text-[24px] font-medium">Set Your Preference</p>
          <p className="text-[16px] max-w-[300px] mt-4">
            Tell us what home feels like — from ocean breeze to city lights.
          </p>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <Image
            src="/assets/png/Preference.png"
            alt=""
            width={862}
            height={600}
            className="w-full max-w-[862px] h-[238px] rounded-[30px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[50px] md:mt-32 gap-10">
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/assets/png/Explore.png"
            alt=""
            width={862}
            height={600}
            className="w-full max-w-[862px] h-[238px] rounded-[30px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="text-center md:text-left">
           <h1 className="text-[40px] md:text-[48px] text-[#FDF3E2]" >0<span className='text-[#2c8af6]'>2</span></h1>
          <p className="text-[22px] md:text-[24px] font-medium">Explore & Discover</p>
          <p className="text-[16px] max-w-[300px] mt-4 md:ml-auto">
            Find destinations that carry the rhythm, colour, and soul of the continent and the islands.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-[50px] md:mt-32  gap-10">
        <div className="text-center md:text-left">
           <h1 className="text-[40px] md:text-[48px] text-[#FDF3E2]" >0<span className='text-[#2c8af6]'>3</span></h1>
          <p className="text-[22px] md:text-[24px] font-medium">Customize Your Journey</p>
          <p className="text-[16px] max-w-[300px] mt-4">
            Create an itinerary that blends heritage with adventure — flights, stays, rides, and experiences all in one flow.
          </p>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <Image
            src="/assets/png/Customize.png"
            alt=""
            width={862}
            height={600}
            className="w-full max-w-[862px] h-[238px] rounded-[30px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default CleaquesPath
