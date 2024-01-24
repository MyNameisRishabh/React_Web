import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPrd, ShowDetails } from '../../Redux/Action/action'
import { Link } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

export const Product = () => {
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

    const handleShowDetail = (product) =>{
        dispatch(ShowDetails(product))
    }
    const products = [
        {
            id : 0,
            Category : "Headphones",
            title:"Gaming Headphone",
            images : "images/headphone.avif",
            rating : (
            <>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            </>) ,
            price : 900
            
        },
        {
            id : 1,
            Category : "Mobile Tablets",
            title:"Galaxy android Tablets",
            images : "images/tablet.jpg",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </>) ,
            price : 10000
            
        },
        {
            id : 2,
            Category : "Headphones",
            title:"Wireless Headphone",
            images : "images/headphone-2.png",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </>) ,
            price : 1200
            
        },
        {
            id : 3,
            Category : "Watches",
            title:"Titan Quartz Analog Watch",
            images : "images/watch-1.webp",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </>) ,
            price : 1500
            
        },
        {
            id : 4,
            Category : "I Phone",
            title:"Apple Iphone 14(256GB)",
            images : "images/phone.png",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </>) ,
            price : 150000
            
        },
        {
            id : 5,
            Category : "Cooling Fans",
            title:"Thermaltake SWAFAN Radiator Fan",
            images : "images/fan.webp",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </>) ,
            price : 1000
            
        },
        {
            id : 6,
            Category : "SmartPhone",
            title:"One Plus 8T Mobile Phone",
            images : "images/smartphone.png",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </>) ,
            price : 20000
            
        },
        {
            id : 7,
            Category : "Bluetooth",
            title:"Bluetooth Speakers TG-113",
            images : "images/bluthooth.webp",
            rating : (
                <>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </>) ,
            price : 250
            
        },
    ]
  return (
    <>
    <Toaster richColors/>
        <h1 className='font-bold text-4xl mt-24 ml-8'>Top Products</h1>
        <div className='grid gap-6  lg:grid-cols-4 sm:grid-cols-2 mt-12 ml-20'>
            {products.map((e) => {
                return(
                    <>
                    <div className='block mt-6'>
            <Link to={'/detail'}><img className='w-60 hover:rotate-0 hover:scale-110 transition-transform' src={e.images} alt="" onClick={() => handleShowDetail(e)} /></Link> 
            <div className="mt-4">
            <p>{e.Category}</p>
                <h1 className='font-bold'>{e.title}</h1>
                <p className='text-orange-400'>{e.rating}</p>
                <h1 className='font-bold text-2xl text-blue-400'>₹{e.price}</h1>
                <button onClick={() => handleAddPrd(e)} className='bg-pink-400 text-white h-9 w-32  hover:bg-blue-500 transition-ease-out'>Add to Cart</button> 
                </div>  
                   
            </div>
                        
                    </>
                )
            })}
        </div>
    </>
  )
}
