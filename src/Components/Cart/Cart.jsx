import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemPrd } from '../../Redux/Action/action'
import { decrementAmount, incrementAmount } from '../../Redux/Action/action'


export const Cart = () => {
  const cartValue = useSelector((state) => state.cart.product)
  const dispatch = useDispatch();
  const handleRemovePrd = (id) => {
    dispatch(RemPrd(id))
  }

  const handleIncrementPrd = (id) =>{
    dispatch(incrementAmount(id))
  }

  const handleDecrementPrd = (id) =>{
    dispatch(decrementAmount(id))
  }


  return (
          <>
          <div className='grid gap-5 lg:grid-cols-1 mt-5 m-auto w-3/5 '>
        {cartValue.length === 0 ? (
          <>
          <div className=''>
          <img src="./images/cart.png" className='m-auto' alt="" />
          <div className='w-80 m-auto'>
          <p className='font-bold text-[24px] mt-10'>YOUR CART FEELS LONELY.</p>
          <p className='text-center'>Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
          </div>
          </div>
         
          
          </>
          
        ) : (
          cartValue.map((item) => (
            <div className='flex justify-around flex-wrap m-10' key={item.id}>
              <img src={item.images} className='w-24' alt="" />
              <p className='mt-12'>{item.title}</p>
              <p className='mt-12'>₹{item.price}</p>

              <div className='mt-12'>
                <button className='w-10 mr-5 bg-black text-white gap-4' onClick={() => handleDecrementPrd(item.id)}>-</button>
                <span className="border-2 p-4 border-black">{item.quantity}</span>
                <button className='w-10 ml-5 bg-black text-white' onClick={() => handleIncrementPrd(item.id)}>+</button>
              </div>
              <p className='mt-12' onClick={() => handleRemovePrd(item.id)}><i className="fa-solid fa-trash"></i></p>

            </div>
          ))
        )}
      </div>
          </>
        )
      
   
  
}
