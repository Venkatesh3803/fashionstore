import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { productItems } from '../data/productData'
const ProductDesign = () => {
    const [selected, setSelected] = useState(0)
    const product = {
        name: 'Basic Tee 6-Pack',
        price: '1099',
        images: [
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
                alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
                alt: 'Model wearing plain black basic tee.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
                alt: 'Model wearing plain gray basic tee.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
                alt: 'Model wearing plain white basic tee.',
            },
        ],
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
        ],
        description:
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    }
    return (
        <>
            <div className='md:flex m-4 gap-3'>
                <div className="flex-1 md:flex gap-3">
                    <div className="flex md:flex-col gap-1 flex-1">
                        <img onClick={(e) => setSelected([0])} className='rounded-sm object-cover w-20 h-20 md:w-32 md:h-32' src={product.images[0].src} alt="" />
                        <img onClick={(e) => setSelected([1])} className='rounded-sm object-cover w-20 h-20 md:w-32 md:h-32' src={product.images[1].src} alt="" />
                        <img onClick={(e) => setSelected([2])} className='rounded-sm object-cover w-20 h-20 md:w-32 md:h-32' src={product.images[2].src} alt="" />
                        <img onClick={(e) => setSelected([3])} className='rounded-sm object-cover w-20 h-20 md:w-32 md:h-32' src={product.images[3].src} alt="" />
                    </div>
                    <div className='mt-2' style={{ flex: "5"}}>
                        <img src={product.images[selected].src} className='object-cover h-[90%] ' alt="" />
                    </div>

                </div>


                {/* right */}
                <div className=" flex-1 md:m-10 my-10 mx-3">
                    <div className="w-4/5 mx-auto flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className='px-2 rounded-md text-white bg-red-700'>10% off</span>
                                    <span>Pre-Order</span>
                                </div>
                                <h1 className='md:text-3xl text-lg font-semibold font-sans'>{product.name}</h1>
                                <h1 className='md:text-3xl text-lg font-semibold font-sans'>Olive</h1>
                            </div>
                            <span className='md:text-2xl text-lg font-semibold'>₹{product.price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className=" flex gap-3">
                                <span className="md:text-lg font-semibold">Qty :-</span>
                                <input className='md:w-12 w-6 text-center border border-gray-600 rounded-sm' type="number" defaultValue={1} />
                            </div>
                            <div className="md:flex items-center self-end gap-3">
                                <span>Rating :-</span>
                                <div className="flex gap-1 text-yellow-600 items-center">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <span>(25)</span>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="">
                            <span className='md:text-sm'>{product.description} </span>
                        </div>

                        <div className="flex gap-2 flex-col">
                            <span className='font-semibold'>Color :-</span>
                            <div className="flex gap-4">
                                {product.colors.map((c) => {
                                    return (
                                        <button className='cursor-pointer rounded-full md:px-4 md:py-4 px-3 py-3 border-2 border-gray-500' style={{ backgroundColor: `${c.name}` }} key={c.class}></button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <span className='font-semibold'>Size :-</span>
                            <div className="flex gap-4">
                                {product.sizes.map((s) => {
                                    return (
                                        <button className=' cursor-pointer rounded-sm md:px-4 md:py-2 px-2 py1 border border-gray-500'>{s.name}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <button className='md:px-4 md:py-2 px-2 py-1 mt-2 bg-sky-500 w-fit cursor-pointer text-white rounded-lg font-semibold'>Add to Cart</button>
                    </div>
                </div>

            </div>

            
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Similar Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-0 ">
                        {productItems.slice(0, 4).map((product) => (
                            <div key={product.id} className="group relative overflow-hidden shadow-md p-2">
                                <div className="min-h-80 aspect-w-1 flex aspect-h-1 gap-4 rounded-md bg-gray-200 group-hover:-translate-x-60 transition-all lg:aspect-none lg:h-80">
                                    <img
                                        src={product.images[0].src}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                    <img
                                        src={product.images[1].src}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div className='flex flex-col gap-2'>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={`../singleproduct/${product.id}`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <div className="flex gap-2">
                                            {product.colors.map(c => {
                                                return (
                                                    <p className="mt-1 flex text-sm w-8 h-8 border border-gray-500 rounded-full text-gray-500 " style={{ backgroundColor: `${c.name}` }}></p>
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-2" >
                                            {product.sizes.map(s => {
                                                return (
                                                    <p className="mt-1 text-sm flex justify-center items-center w-8 h-8 border border-gray-500 text-gray-500 " >{s.name}</p>
                                                )
                                            })}
                                        </div>

                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductDesign
