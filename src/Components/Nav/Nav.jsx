import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    const [search, setSearch] = useState('')
    const [filterProducts, setFilterProducts] = useState('')
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
   

  const Search = () => {
    const searchPrd = products.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase())
    );

    console.log("Filtered-Products :", searchPrd);
    setFilterProducts(searchPrd);
  
  };
  return (
    <div className='pt-4  h-20 top-0 sticky'>
    <div className="container">
      <div className="flex justify-between items-center">
       {/* <Link to={'/'}><h1 className='text-4xl font-bold'>Shop</h1></Link>  */}
          <div className='lg:flex hidden w-full m-auto max-w-[500px]'>
          <input className='border-2 border-blue-500 px-6 py-2 w-full' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search anything in this field' />
          <div className='bg-blue-500 text-white text-[26px] grid place-items-center px-4'>
          <i onClick={Search} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
       
      </div>
    </div>

   

    <div className='container mt-4'>
        <div className='grid gap-6 lg:grid-cols-4 sm:grid-cols-2'>
          {filterProducts.length > 0 ? (
            filterProducts.map((e) => (
              <div key={e.id} className='group-hover:scale-110 transition duration-300'>
                <img src={e.images} className='max-h-[160px] group-hover:scale-110 transition duration-300 m-auto' alt="" />
                <p className='text-center'>{e.Category}</p>
                <p className='text-center font-bold'>{e.title}</p>
                <p className='text-center'>{e.price}</p>
              </div>
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      </div>
      </div>
  )
}
