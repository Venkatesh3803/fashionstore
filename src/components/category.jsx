import React from 'react'
import "../styles/category.css"

const Category = () => {
    return (
        <div className='md:flex gap-2 m-4'>
            <div className="flex-1 flex gap-2 ">
                <div className="flex flex-col flex-1 gap-2 overflow-hidden ">
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg" alt="" />
                        <button className='absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Womens</button>
                    </div>
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button className=' absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Bags</button>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden flex relative  justify-center items-center">
                    <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button className='absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Mens</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 w-full ">
                <div className="flex-1  overflow-hidden flex relative  justify-center items-center">
                    <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button className='absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Shoes</button>
                </div>
                <div className="flex flex-1 gap-2 overflow-hidden ">
                    <div className="overflow-hidden  relative flex justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button className='absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Accessories</button>
                    </div>
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg" alt="" />
                        <button className='absolute px-4 py-2 bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Kides Wear</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category
