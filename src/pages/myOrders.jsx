import React from 'react'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { TiTick } from "react-icons/ti"

const MyOrders = () => {
    return (
        <div>
            <Annocement />
            <Navber />
            <>
                <div className="bg-slate-100  my-3 rounded-xl shadow-md w-4/5 m-auto ">
                    <h1 className='text-3xl text-center py-4 font-semibold'>My Orders</h1>
                    <div className="bg-slate-50 m-5 rounded-lg ">
                        <div className="flex justify-between p-4 shadow-md">
                            <div className="flex gap-12">
                                <div className="flex items-start flex-col">
                                    <span className='font-semibold'>Order Number</span>
                                    <span>WU8845465</span>
                                </div>
                                <div className="flex items-start flex-col">
                                    <span className='font-semibold'>Order Number</span>
                                    <span>WU8845465</span>
                                </div>
                                <div className="flex items-start flex-col">
                                    <span className='font-semibold'>Order Number</span>
                                    <span>WU8845465</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className='border px-4 border-gray-500 rounded-lg shadow-md hover:bg-purple-200'>View Order</button>
                                <button className='border px-4 border-gray-500 rounded-lg shadow-lg hover:bg-purple-200'>Track Order</button>
                            </div>
                        </div>


                        {/* cart products */}
                        <div className="flex p-5 flex-col shadow-md">
                            <div className="flex p-5 gap-4">
                                <div style={{ flex: "1.5" }}>
                                    <img className='rounded-md object-cover' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold '>Best t-shirt for mens</span>
                                        <span className='text-xl font-semibold '>₹899</span>
                                    </div>
                                    <span className='text-sm font-serif text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur explicabo nesciunt ut id tempora? Debitis repellendus, quod obcaecati atque illum eligendi aliquid neque expedita sequi voluptas repudiandae, officiis vitae!</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-4">
                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                    <span className='text-gray-700 font-serif '>Product Deliverd by 28th oct</span>
                                </div>
                                <div className="flex gap-5">
                                    <button className='text-purple-600'>View product</button>
                                    <div className="border-l border-gray-500"></div>
                                    <button className='text-purple-600'>Buy again</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-5 flex-col shadow-md">
                            <div className="flex p-5 gap-4">
                                <div style={{ flex: "1.5" }}>
                                    <img className='rounded-md object-cover' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold '>Best t-shirt for mens</span>
                                        <span className='text-xl font-semibold '>₹899</span>
                                    </div>
                                    <span className='text-sm font-serif text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur explicabo nesciunt ut id tempora? Debitis repellendus, quod obcaecati atque illum eligendi aliquid neque expedita sequi voluptas repudiandae, officiis vitae!</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-4">
                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                    <span className='text-gray-700 font-serif '>Product Deliverd by 28th oct</span>
                                </div>
                                <div className="flex gap-5">
                                    <button className='text-purple-600'>View product</button>
                                    <div className="border-l border-gray-500"></div>
                                    <button className='text-purple-600'>Buy again</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-5 flex-col shadow-md">
                            <div className="flex p-5 gap-4">
                                <div style={{ flex: "1.5" }}>
                                    <img className='rounded-md object-cover' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold '>Best t-shirt for mens</span>
                                        <span className='text-xl font-semibold '>₹899</span>
                                    </div>
                                    <span className='text-sm font-serif text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur explicabo nesciunt ut id tempora? Debitis repellendus, quod obcaecati atque illum eligendi aliquid neque expedita sequi voluptas repudiandae, officiis vitae!</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-4">
                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                    <span className='text-gray-700 font-serif '>Product Deliverd by 28th oct</span>
                                </div>
                                <div className="flex gap-5">
                                    <button className='text-purple-600'>View product</button>
                                    <div className="border-l border-gray-500"></div>
                                    <button className='text-purple-600'>Buy again</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-5 flex-col shadow-md">
                            <div className="flex p-5 gap-4">
                                <div style={{ flex: "1.5" }}>
                                    <img className='rounded-md object-cover' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold '>Best t-shirt for mens</span>
                                        <span className='text-xl font-semibold '>₹899</span>
                                    </div>
                                    <span className='text-sm font-serif text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur explicabo nesciunt ut id tempora? Debitis repellendus, quod obcaecati atque illum eligendi aliquid neque expedita sequi voluptas repudiandae, officiis vitae!</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-4">
                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                    <span className='text-gray-700 font-serif '>Product Deliverd by 28th oct</span>
                                </div>
                                <div className="flex gap-5">
                                    <button className='text-purple-600'>View product</button>
                                    <div className="border-l border-gray-500"></div>
                                    <button className='text-purple-600'>Buy again</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-5 flex-col shadow-md">
                            <div className="flex p-5 gap-4">
                                <div style={{ flex: "1.5" }}>
                                    <img className='rounded-md object-cover' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                    <div className="flex justify-between">
                                        <span className='text-xl font-semibold '>Best t-shirt for mens</span>
                                        <span className='text-xl font-semibold '>₹899</span>
                                    </div>
                                    <span className='text-sm font-serif text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur explicabo nesciunt ut id tempora? Debitis repellendus, quod obcaecati atque illum eligendi aliquid neque expedita sequi voluptas repudiandae, officiis vitae!</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center gap-4">
                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                    <span className='text-gray-700 font-serif '>Product Deliverd by 28th oct</span>
                                </div>
                                <div className="flex gap-5">
                                    <button className='text-purple-600'>View product</button>
                                    <div className="border-l border-gray-500"></div>
                                    <button className='text-purple-600'>Buy again</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
            <Banner />
            <Footer />
        </div>
    )
}

export default MyOrders
