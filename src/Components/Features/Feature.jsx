import React from 'react'

export const Feature = () => {
  return (
    <>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 mt-8 '>
        <div className='ml-20 sm:mt-5 md:mt-5 flex'>
        <div className='mt-3'>
            <i class="fa-solid fa-truck"></i>
        </div>
        <div className='ml-3'><h1 className='font-bold'>Free Delivery</h1>
            <p>Orders from all items</p></div>
        </div>


        <div className='ml-20  sm:mt-10 md:mt-5 flex'>
        <div className='mt-3'>
        <i class="fa-solid fa-circle-dollar-to-slot"></i>
        </div>
        <div className='ml-3'><h1 className='font-bold'>Return & Refund</h1>
            <p>Money back gurantee</p></div>
        </div>


        <div className='ml-20  md:mt-5 flex'>
        <div className='mt-3'><i class="fa-solid fa-tag"></i></div>
        <div className='ml-3'><h1 className='font-bold'>Member Discount</h1>
            <p className='text-gray-600'>On Order Over ₹99.00</p></div>
        </div>


        <div className='ml-20 sm:mt-5 md:mt-5 flex'>
        <div className='mt-3'><i class="fa-solid fa-headset"></i></div>
        <div className='ml-3'><h1 className='font-bold'>Support 24/7</h1>
            <p>Contact us 24 hours a day</p></div>
        
        </div>
    </div>
    </>
  )
}
