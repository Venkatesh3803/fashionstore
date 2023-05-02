import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineMenu } from "react-icons/ai";

import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navber = () => {
    const user = true
    const [cart, setCart] = useState("")
    const [profile, setProfile] = useState("")
    const [menu, setMenu] = useState("")

    return (
        <>
            <div className='lg:flex flex items-center h-20 sticky top-0 z-20 bg-gray-200 p-5'>
                <AiOutlineMenu onClick={() => setMenu(true)} className='lg:hidden md:text-2xl fixed top-8 text-xl' />
                {/* mobile responsive */}
                {menu && <div className="lg:hidden md:w-[40%] flex-col p-2 bg-gray-200 gap-2 absolute top-20 items-center w-[60%] ">
                    <span onClick={()=>setMenu(false)} className='w-6 h-6 bg-black flex justify-center items-center rounded-full text-white absolute right-2 top-2 cursor-pointer'>x</span>
                    <Link to={"/"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Home</li>
                        </ul>
                    </Link>
                    <Link to={"../products"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Clothing</li>
                        </ul>
                    </Link>
                    <Link to={"../products"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Shoes</li>
                        </ul>
                    </Link>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >Accessories</li>
                    </ul>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >About Us</li>
                    </ul>
                </div>}

                <div className="lg:flex flex-wrap hidden gap-2 items-center w-[100%]">
                    <Link to={"/"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Home</li>
                        </ul>
                    </Link>
                    <Link to={"../products"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Clothing</li>
                        </ul>
                    </Link>
                    <Link to={"../products"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Shoes</li>
                        </ul>
                    </Link>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >Accessories</li>
                    </ul>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >About Us</li>
                    </ul>
                </div>
                <div className="w-[100%] flex justify-center ">
                    <Link to={"/"}>
                        <span className='md:text-3xl left-16 font-mono text-xl cursor-pointer text-fuchsia-800 '>Fashion Store</span>
                    </Link>
                </div>
                <div className="flex w-[100%]  items-center justify-end gap-4 ">
                    <div className="lg:flex items-center hidden rounded-lg border border-gray-400 px-2 py-1">
                        <input className='bg-transparent focus:outline-none' type="text" placeholder='Search...' />
                        <BiSearchAlt2 className='text-xl cursor-pointer placeholder:text-sm' />
                    </div>
                    <div className="flex relative">
                        <span className='px-1 py-0.5 bg-red-500 text-xs text-white absolute -top-3 -right-2 rounded-full'>+5</span>
                        <GiShoppingCart onClick={() => setCart(!cart)} className='text-2xl cursor-pointer' />
                    </div>
                    {user ?
                        <img onMouseEnter={() => setProfile(!profile)} className='w-8 h-8 cursor-pointer rounded-full object-cover' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        :
                        <Link to={"../login"}>
                            <span className='cursor-pointer'>Login</span>
                        </Link>
                    }
                </div>
                {profile &&
                    <div onMouseLeave={() => setProfile(false)} className="w-40 bg-purple-500 rounded-md absolute top-14 right-10 p-3">

                        <Link to={"../dashboard"}>
                            <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>Dashboard</li></ul>
                        </Link>
                        <Link to={"../myorders"}>
                            <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>My Orders</li></ul>
                        </Link>
                        <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>Log Out</li></ul>
                    </div>
                }
                {cart &&
                    <>
                        <div className="bg-purple-100 md:w-2/6 overflow-scroll items-end fixed top-20 right-3 rounded-xl p-5 max-h-screen backdrop-blur-sm" style={{ zIndex: "2" }}>
                            <span onClick={() => setCart(false)} className='absolute top-0  text-xl font-semibold cursor-pointer right-4'>x</span>
                            <h1 className='text-xl font-bold text-gray-700'>Cart</h1>
                            <div className="flex justify-between  mt-4">
                                <div className="flex gap-3 items-center ">
                                    <img className='w-28 h-28 rounded-md object-cover ' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className=" flex flex-col gap-1">
                                        <span className='font-semibold text-sm'>Best t-shirt for mens</span>
                                        <span className=''>size :- L</span>
                                        <div className="flex items-center gap-2">
                                            <AiFillCaretLeft className='text-xl cursor-pointer text-gray-600' />
                                            <span>5</span>
                                            <AiFillCaretRight className='text-xl cursor-pointer text-gray-600' />
                                        </div>
                                        <span>color :- Gray</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className='text-lg font'>price</span>
                                        <span className='text'>₹899</span>
                                    </div>
                                    <button className='text-red-500 font-serif text-sm cursor-pointer'>REMOVE</button>
                                </div>
                            </div>
                            <div className="flex justify-between  mt-4">
                                <div className="flex gap-3 items-center ">
                                    <img className='w-28 h-28 rounded-md object-cover ' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className=" flex flex-col gap-1">
                                        <span className='font-semibold text-sm'>Best t-shirt for mens</span>
                                        <span className=''>size :- L</span>
                                        <div className="flex items-center gap-2">
                                            <AiFillCaretLeft className='text-xl cursor-pointer text-gray-600' />
                                            <span>5</span>
                                            <AiFillCaretRight className='text-xl cursor-pointer text-gray-600' />
                                        </div>
                                        <span>color :- Gray</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className='text-lg font'>price</span>
                                        <span className='text'>₹899</span>
                                    </div>
                                    <button className='text-red-500 font-serif text-sm cursor-pointer'>REMOVE</button>
                                </div>
                            </div>
                            <div className="flex justify-between  mt-4">
                                <div className="flex gap-3 items-center ">
                                    <img className='w-28 h-28 rounded-md object-cover ' src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className=" flex flex-col gap-1">
                                        <span className='font-semibold text-sm'>Best t-shirt for mens</span>
                                        <span className=''>size :- L</span>
                                        <div className="flex items-center gap-2">
                                            <AiFillCaretLeft className='text-xl cursor-pointer text-gray-600' />
                                            <span>5</span>
                                            <AiFillCaretRight className='text-xl cursor-pointer text-gray-600' />
                                        </div>
                                        <span>color :- Gray</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <span className='text-lg font'>price</span>
                                        <span className='text'>₹899</span>
                                    </div>
                                    <button className='text-red-500 font-serif text-sm cursor-pointer'>REMOVE</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 border-t border-gray-500 mt-10">
                                <div className="flex justify-between">
                                    <ul className=''><li>Order Value</li></ul>
                                    <ul><li>₹899</li></ul>
                                </div>
                                <div className="flex justify-between">
                                    <ul className=''><li>Delivery</li></ul>
                                    <ul><li>Free</li></ul>
                                </div>
                                <div className="flex justify-between">
                                    <ul className=''><li>Discount</li></ul>
                                    <ul><li>10%</li></ul>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <ul className='font-semibold'><li>TOTAL</li></ul>
                                    <ul className='font-semibold'><li>₹799</li></ul>
                                </div>
                                <Link to={"../checkout"}>
                                    <button className='bg-orange-400 w-[100%] cursor-pointer py-2 rounded-md text-white hover:bg-orange-600 transition-all'>CheckOut</button>
                                </Link>
                                <Link to={"/"}>
                                    <button className='border border-gray-500 w-[100%] cursor-pointer py-2 rounded-md text-gray-700 transition-all'>Continue Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Navber
