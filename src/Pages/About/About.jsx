import React from 'react'
import { Link } from 'react-router-dom' 
export const About = () => {
  return (
    <div className='mt-8'>
    <div className="conatiner grid md:grid-cols-2 py-8">
    <div>
            <img className='ml-auto w-[37rem]'  src="./images/c5.png" alt="" />
        </div>
        <div className="flex items-center ml-24 ">
        <div className='max-w-[450px] space-y-4'>
        <p className='text-topHeadingSecondary font-bold text-4xl'>
        Welcome to TechVibe Hub Company
        </p>
        <p className='text-topHeadingPrimary text-1xl md:text-1xl'>
        At TechVibe Hub, we are passionate about bringing cutting-edge electronics and innovative solutions to our customers. Established in 2017, we have been at the forefront of the electronics industry, consistently delivering quality products and exceptional service.
        </p>
        <h3 className='text-2xl'>Exclusive offer <span className='text-red-600'>-10%</span> off this week</h3>
        <Link to={'/shop'}><a className='inline-block mt-4 bg-blue-400 rounded-md px-6 py-3 hover:bg-blue-400 text-white' href='#'>Shop Now</a></Link>
        
        </div>
        </div>

        
    </div>

    </div>
  )
}
