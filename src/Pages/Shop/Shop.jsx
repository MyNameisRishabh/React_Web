import React, { useState } from 'react';
import "./Shop.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddPrd, ShowDetails } from '../../Redux/Action/action';
import { Toaster, toast } from 'sonner';

export const Shop = () => {
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

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProduct = (category) => {
        if (category === 'All Products') {
            setFilteredProducts([]);
        } else {
            const update = productsData.filter((x) => x.Category === category);
            setFilteredProducts(update);
        }
    }

    const AllProducts = () => {
        setFilteredProducts([]);
    }

    const productsData = [
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
                Category : "Mobile",
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
                Category : "Mobile",
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
            {
                id : 8,
                Category : "Headphones",
                title:"Earphones",
                images : "images/a1.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 550
                
            },
            {
                id : 9,
                Category : "Cooling Fans",
                title:"Air-Conditioner",
                images : "images/ac1.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 5550
                
            },
            {
                id : 10,
                Category : "Mouse",
                title:"Smart-Mouse",
                images : "images/pr11.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 350
                
            },
            {
                id : 11,
                Category : "Watches",
                title:"Smart-Watch",
                images : "images/w1.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 1050
                
            },
            {
                id : 12,
                Category : "Camera",
                title:"Dsl-camera",
                images : "images/dslr camera.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 100250
                
            },
            {
                id : 13,
                Category : "Headphones",
                title:"Headphone",
                images : "images/h1.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 1250
                
            },
            {
                id : 14,
                Category : "Mobile",
                title:"OPPO F5",
                images : "images/p6.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 10250
                
            },
            {
                id : 15,
                Category : "CPU",
                title:"Gaming CPU",
                images : "images/pr7.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 6650
                
            },
            {
                id : 16,
                Category : "Cooling Fans",
                title:"Cooling Fan",
                images : "images/pr5.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 2250
                
            },
            {
                id : 17,
                Category : "Monitor",
                title:"Sony LED",
                images : "images/pr8.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 17250
                
            },
            {
                id : 18,
                Category : "CPU",
                title:"Central Processing Unit",
                images : "images/cpu123.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 10250
                
            },
            {
                id : 19,
                Category : "Watches",
                title:"Smart Watch",
                images : "images/pr9.png",
                rating : (
                    <>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </>) ,
                price : 1250
                
            },
    ];

    return (
        <>
        <Toaster richColors/>
            <div className="products">
                <h2># Products</h2>
                <h5>Home _ Products</h5>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>All Products</li>
                                <li onClick={() => filterProduct('Headphones')}>Headphones</li>
                                <li onClick={() => filterProduct('Cooling Fans')}>Cooling fans</li>
                                <li onClick={() => filterProduct('Mobile')}>Mobile</li>
                                <li onClick={() => filterProduct('Bluetooth')}>Speakers</li>
                                <li onClick={() => filterProduct('Watches')}>Watches</li>
                                <li onClick={() => filterProduct('CPU')}>CPU</li>
                                <li onClick={() => filterProduct('Mouse')}>Mouse</li>
                                <li onClick={() => filterProduct('Camera')}>Camera</li>
                                <li onClick={() => filterProduct('Monitor')}>Monitor</li>
                                <li onClick={() => filterProduct('Mobile Tablets')}>Mobile Tablet</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid gap-6  lg:grid-cols-4 sm:grid-cols-2 mt-12 ml-20'>
            {(filteredProducts.length ? filteredProducts : productsData).map((e) => {
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
                 )})}
                
     </div>
     </div>
       </div>
        </>
    );
            };







