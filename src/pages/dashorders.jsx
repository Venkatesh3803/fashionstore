
import React from 'react'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'


const Dashorders = () => {
    return (
        <div>
            <Annocement />
            <Navber />
            <div className="h-[86vh] ">
                <div className="dash w-[96%] m-auto mt-4 h-[96%] rounded-xl flex">
                    <Dashboardleft />
                    <div className="p-5 overflow-scroll" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Orders</h1>
                        <h2 className='text-gray-600'>Detailed information about the orders</h2>

                        <div className="bg-slate-100  my-3 rounded-xl shadow-md w-4/5 m-auto">
                            <div className="bg-slate-50 m-5 rounded-lg ">
                                <div className="flex justify-between p-4 shadow-md">
                                    <div className="flex gap-12">
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Order Number</span>
                                            <span>WU8845465</span>
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Total Price</span>
                                            <span>₹8991</span>
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Payment Method</span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className='border px-4 border-green-500 rounded-lg shadow-md hover:bg-green-400 transition-all'>Accept Order</button>
                                        <button className='border px-4 border-red-500 rounded-lg shadow-lg hover:bg-red-400 transition-all'>Delete Order</button>
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
                                        <button className='text-purple-600'>View order</button>
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
                                        <div className="flex gap-5">
                                            <button className='text-purple-600'>View Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100  my-3 rounded-xl shadow-md w-4/5 m-auto">
                            <div className="bg-slate-50 m-5 rounded-lg ">
                                <div className="flex justify-between p-4 shadow-md">
                                    <div className="flex gap-12">
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Order Number</span>
                                            <span>WU8845465</span>
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Total Price</span>
                                            <span>₹8991</span>
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <span className='font-semibold'>Payment Method</span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className='border px-4 border-green-500 rounded-lg shadow-md hover:bg-green-400 transition-all'>Accept Order</button>
                                        <button className='border px-4 border-red-500 rounded-lg shadow-lg hover:bg-red-400 transition-all'>Delete Order</button>
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
                                        <div className="flex gap-5">
                                            <button className='text-purple-600'>View Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Dashorders
