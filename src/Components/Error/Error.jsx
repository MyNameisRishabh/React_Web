import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='grid grid-cols-2'>
      <div >
        <img src="./images/error-1.png" alt="" className='w-2/5 ml-[18rem] mt-[40px]' />
      </div>
      <div className='mt-32'>
          <h1 className='font-bold text-[50px] w-80'>OOPS! PAGE NOT FOUND.</h1>
          <p className='w-[21rem] mt-4 font-semibold'>You must have to pick wrong door because have not been able to lay my eye on the page you haven't been searching for.</p>
          <Link to={'/'}><button className='bg-blue-500 text-white h-9 w-32 rounded-md hover:bg-orange-500 transition-ease-out mt-3'>Back to Home</button></Link>
          
      </div>
    </div>
  )
}
