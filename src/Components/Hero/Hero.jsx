import React from 'react'
import { Link } from 'react-router-dom'
export const Hero = () => {
  return (
    <>
        <div className='bg-blue-400 m-auto mt-12'>
    <div className="container grid md:grid-cols-2 py-8 m-auto">
        <div className="flex items-center ml-24">
        <div className='max-w-[450px] space-y-4'>
        <p className='text-white'>
            LATEST TECHNOLOGY ADDED
        </p>
        <h2 className='text-white font-bold text-4xl md:text-5xl'>
            Apple iPad 10.2 10th Gen-2024
        </h2>
        <h3 className='text-2xl text-white'>Exclusive offer <span className='text-red-600'>-10%</span> off this week</h3>
        <Link to={'/shop'}><a className='inline-block mt-4 bg-white rounded-md px-6 py-3 hover:bg-gray-400 hover:text-white' href='#'>Shop Now</a></Link>
        
        </div>
        </div>

        <div>
            <img className='m-auto w-[300px]' src="./images/side-image.png" alt="" />
        </div>
    </div>

    </div>
    </>
  )
}
