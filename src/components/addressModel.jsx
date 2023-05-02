import React from 'react'
import { Link } from 'react-router-dom'

const AddressModel = ({ setCod }) => {
    return (
        <div>
            <form className="md:w-2/4 mx-auto flex absolute top-16 right-96 flex-col gap-6 p-10 my-20 bg-purple-50 rounded-xl flex-1">
                <span onClick={()=> setCod(false)} className='w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-black text-white'>x</span>
                <h2 className='font-semibold text-2xl '> Billing Adderss</h2>
                <div className=" flex gap-5">
                    <label className='w-full'>first name :-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='first name' />
                    </label>
                    <label className='w-full'>last name:-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='last name' />
                    </label>
                </div>
                <label className='w-full'> email:-
                    <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='email' />
                </label>
                <div className=" flex gap-5">
                    <label className='w-full'>Phone Number :-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Phone Number' />
                    </label>
                    <label className='w-full'>City:-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='City' />
                    </label>
                </div>
                <label className='w-full'>Address:-
                    <textarea className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" rows={2} type="text" placeholder='adderss' />
                </label>
                <div className=" flex gap-5">
                    <label className='w-full'>State :-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='first name' />
                    </label>
                    <label className='w-full'>District:-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='last name' />
                    </label>
                    <label className='w-full'>Pincode:-
                        <input className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='last name' />
                    </label>
                </div>
                <Link to={"../success"}>
                    <button className='text-white w-full bg-green-600 py-2 rounded-md transition-all hover:bg-green-500'>Place Order</button>
                </Link>
            </form>
        </div>
    )
}

export default AddressModel
