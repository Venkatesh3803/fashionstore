import React from 'react'
import Annocement from '../components/annocement'
import Navber from '../components/navber'
import Footer from "../components/footer"
import "../styles/dashboard.css"
import { BsArrowDownCircle, BsArrowUpCircle, BsClipboardData,  } from "react-icons/bs"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { Link } from 'react-router-dom'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'
import Dashboardleft from '../components/dashboardleft'
import Chart from '../components/chart'


const Dashboard = () => {
    return (
        <div>
            <Annocement />
            <Navber />
            <div className="lg:h-[86vh] ">
                <div className="dash lg:w-[96%] m-auto mt-4 lg:h-[96%] rounded-xl md:flex">
                    <Dashboardleft/>
                    <div className="p-5 overflow-scroll" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Dashboard</h1>
                        <h2 className='text-gray-600'>Detailed information about the store</h2>

                        <div className="flex  justify-around mt-5">
                            <div className="md:flex gap-2 flex-wrap">
                                <Link to={"/dashproducts"}>
                                    <div className="border-2 border-gray-300 px-4 py-2 bg-pink-300 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                        <div className=" flex gap-2 flex-col justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className='px-4 py-2 rounded-xl text-2xl bg-slate-400 text-white'>< MdOutlineProductionQuantityLimits /></span>
                                                <p className='text-xl font-semibold'>Total Products</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className='text-xl '><BsArrowDownCircle /></span>
                                                <span className='text-sm self-end rounded-full px-3 py-2 shadow-sm bg-cyan-600 text-white'>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="border-2 border-gray-300 px-4 py-2 bg-purple-300 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                    <div className=" flex gap-2 flex-col justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className='px-4 py-2 rounded-xl text-2xl bg-slate-400 text-white'><GiTakeMyMoney /></span>
                                            <p className='text-xl font-semibold'>Montly Earning</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className='text-xl '><BsArrowDownCircle /></span>
                                            <span className='text-sm self-end rounded-full px-3 py-2 shadow-sm bg-cyan-600 text-white'>12.5L</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/dashorders"}>
                                    <div className="border-2 border-gray-300 bg-yellow-200 px-4 py-2 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                        <div className=" flex gap-2 flex-col justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className='px-4 py-2 rounded-xl text-2xl bg-slate-400 text-white'><BsClipboardData /></span>
                                                <p className='text-xl font-semibold'>Orders</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className='text-xl '><BsArrowUpCircle /></span>
                                                <span className='text-sm self-end rounded-full px-3 py-2 shadow-sm bg-cyan-600 text-white'>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={"/dashusers"}>
                                    <div className="border-2 border-gray-300 px-4 py-2 bg-rose-200 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                        <div className=" flex gap-2 flex-col justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className='px-4 py-2 rounded-xl text-2xl bg-slate-400 text-white'><BiUserCircle /></span>
                                                <p className='text-xl font-semibold'>Users</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className='text-xl '><BsArrowUpCircle /></span>
                                                <span className='text-sm self-end rounded-full px-3 py-2 shadow-sm bg-cyan-600 text-white'>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <Chart/>
                    </div>
                </div>
            </div>
        
            <Footer />
        </div>
    )
}

export default Dashboard
