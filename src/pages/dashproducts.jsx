import React, { useState } from 'react'
import { BsCartX } from 'react-icons/bs'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'
import AddproductModel from '../components/addproductModel'


const Dashproducts = () => {

    const [addProduct, setAddProduct] = useState(false)

    return (
        <div>
            <Annocement />
            <Navber />
            <div className="md:h-[86vh]">
                <div className="dash w-[96%] m-auto mt-4 h-[96%] rounded-xl md:flex">
                    <Dashboardleft />
                    <div className="p-5 overflow-y-scroll" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Products</h1>
                        <h2 className='text-gray-600'>Detailed information about the Products</h2>

                        <div className="flex justify-around overflow-scroll ">
                            <div className=' mx-auto my-4'>
                                <div className="flex items-center justify-between">
                                    <button onClick={()=>setAddProduct(true)} className='bg-orange-400 text-white px-2 py-1 my-2 rounded-md hover:bg-orange-300 duration-150'>addProduct</button>
                                    <div className="border-2 flex items-center gap-3 border-gray-700 rounded-lg px-3 py-1">
                                        <BsCartX className='text-xl' />
                                        <span>Outof Stock</span>
                                    </div>
                                </div>
                                <table className=' border border-gray-400 shadow-md ' >
                                    <thead>
                                        <tr className='border border-gray-400'>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Id</td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>title</td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Image</td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Qty </td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'> size/color</td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>price</td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                                            <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>
                                        <tr className='border border-gray-400' >
                                            <td className='px-4 py-3'>151516c4646as...</td>
                                            <td className='px-4 py-3 font-semibold '>Best shirt for mens</td>
                                            <td className='w-20 h-20 rounded-md object-cover '><img src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-md object-cover" alt="" /></td>
                                            <td className='px-4 py-3'>58</td>
                                            <td className='px-4 py-3'>Ovile / M </td>
                                            <td className='px-4 py-3 '><button className='px-3 py-1'> ₹899</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-green-400 rounded-md text-gray-white hover:bg-green-500 '> Edit</button></td>
                                            <td className='px-4 py-3'><button className='px-2 py-1 bg-red-400 rounded-md text-gray-white hover:bg-red-500 '> Delete</button></td>
                                        </tr>

                                    </tbody>
                                </table>
                                {addProduct &&
                                    <AddproductModel setAddProduct={setAddProduct} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashproducts
