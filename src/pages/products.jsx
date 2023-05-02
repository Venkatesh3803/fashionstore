import React from 'react'
import { Link } from 'react-router-dom'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Card from '../components/card'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { productItems } from '../data/productData'

const Products = () => {
    return (
        <div>
            <Annocement />
            <Navber />
            <div className="md:flex">
                <div className="flex md:flex-col gap-3 mt-20 px-10 w-full" style={{ flex: "1" }}>
                    <div className="">
                        <h1 className='text-lg mb-2 font-semibold'> products Category</h1>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Shirts</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">T-Shirts</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Jeans</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Hoodies</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">shoes</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Accessories</label>
                        </div>
                    </div>
                    <div className="md:flex hidden flex-col self-start gap-1">
                        <span className='text-lg mb-2 font-semibold'>Range :-</span>
                        <div className="items-center flex gap-1">
                            <span>0</span>
                            <input type="range" max={10000} min={299} />
                            <span>10000</span>
                        </div>
                    </div>
                    <div className="flex flex-col self-start gap-1">
                        <span className='text-lg mb-2 font-semibold'>Sort By</span>
                        <div className="flex gap-1">
                            <input type="radio" name='price' />
                            <label htmlFor="">sort by lowest price</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name='price' />
                            <label htmlFor="">sort by highest price</label>
                        </div>
                    </div>
                </div>
                <div className="overflow-scroll h-screen" style={{ flex: "5" }}>
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-0 ">
                            {productItems.map((product) => (
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
            </div>

            <Banner />
            <Footer />
        </div>
    )
}

export default Products
