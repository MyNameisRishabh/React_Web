import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
   <>
    <div className='bg-[#E3EDF6] '>
    <div className="conatiner grid md:grid-cols-2 py-8">
        <div className="flex items-center ml-24 sm:mr-8">
        <div className='max-w-[450px] space-y-4'>
        <p className='text-topHeadingSecondary'>
            Starting At <span className='font-bold'>₹999.00</span>
        </p>
        <h2 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl'>
            The Best Note Book collection 2023
        </h2>
        <h3 className='text-2xl'>Exclusive offer <span className='text-red-600'>-10%</span> off this week</h3>
        <Link to={'/shop'}><a className='inline-block bg-white rounded-md mt-4 px-6 py-3 hover:bg-blue-400 hover:text-white' href='#'>Shop Now</a></Link>
        
        </div>
        </div>

        <div>
            <img className='ml-auto' src="./images/hero-img1.png" alt="" />
        </div>
    </div>

    </div>
   </>
  )
}
