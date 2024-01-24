import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddPrd } from '../../Redux/Action/action'
import { Toaster, toast } from 'sonner'

export const ProductDetail = () => {
    const viewDetails = useSelector((state) => state.productDetail.productDetail)
    const dispatch = useDispatch() 
    const cartvalue = useSelector((state) => state.cart.product)
    
    const isProductInCart = (productId) => {
      return cartvalue.some((product) => product.id === productId);
    };
  
    const handleAddPrd = (product) => {
      if (!isProductInCart(product.id)) {
        dispatch(AddPrd(product));
        toast.success(`${product.title} has been added to the Cart`);
      } else {
        toast.error(`${product.title} is already in the Cart`);
      }
    };
    
    console.log(viewDetails);
  return (
    <>
    <Toaster richColors/>
        {viewDetails ? (
        <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
          <div className=''>
            <img className='w-3/5 ml-48 mt-16' src={viewDetails.images} alt='' />
          </div>
          <div className='md:mt-24'>
            <h1 className='font-bold text-[40px] w-4/5'>{viewDetails.title}</h1>
            <h1 className='font-semibold text-[25px] mt-3'>{viewDetails.Category}</h1>
            <p className='text-orange-500 mt-2'>{viewDetails.rating}</p>
            <h1 className='text-[15px] w-3/5 mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores voluptatum deserunt ducimus
              voluptas aperiam voluptates odit eius quis explicabo in consectetur, expedita necessitatibus accusamus,
              ipsum animi rerum ad possimus.
            </h1>
            <p className='font-bold text-[22px] mt-2'>Price : ₹{viewDetails.price}</p>
            <div className='mt-2'><span className='font-bold text-[14px]'>Select Colors :</span><select name="Color" id="color" >
              <option value="mix">Mixed</option>
            </select></div>
            <button onClick={() => handleAddPrd(viewDetails)} className='bg-pink-400 text-white h-9 w-32 mt-2 hover:bg-blue-500 transition-ease-out'>Add to Cart</button>
           <Link to={'/'}><button  className='bg-pink-400 text-white h-9 w-32 ml-10 hover:bg-blue-500 transition-ease-out'>Back Home</button></Link>
            
            
            
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
