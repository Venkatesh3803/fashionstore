import React from 'react'
import { useState } from 'react'



const AddproductModel = ({ setAddProduct }) => {
    const [title, setTitle] = useState("")
    const [gender, setGender] = useState("")
    const [desc, setDesc] = useState("")
    const [size, setSize] = useState("")
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")
    const [fabric, setFabric] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else if (e.target.name === "gender") {
            setGender(e.target.value)
        } else if (e.target.name === "desc") {
            setDesc(e.target.value)
        } else if (e.target.name === "category") {
            setCategory(e.target.value)
        } else if (e.target.name === "price") {
            setPrice(e.target.value)
        } else if (e.target.name === "fabric") {
            setFabric(e.target.value)
        } else if (e.target.name === "quantity") {
            setQuantity(e.target.value)
        } else if (e.target.name === "color") {
            setColor(e.target.value)
        } else if (e.target.name === "size") {
            setSize(e.target.value)
        }
    }


    return (
        <div className='absolute left-96 top-24 transition-all backdrop-blur-sm '>
            <form  className="md:w-3/4 mx-auto flex flex-col gap-4 p-10  my-20 relative bg-purple-50 rounded-xl flex-1">
                <h2 className='font-semibold text-2xl '> Add Product</h2>
                <span onClick={() => setAddProduct(false)} className='w-8 h-8 text-white font-semibold flex justify-center items-center bg-black rounded-full absolute top-5 right-5 cursor-pointer'>X</span>
                <div className=" flex gap-5">
                    <label className='w-full'>Title :-
                        <input onChange={handleChange} value={title} name="title" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='title' />
                    </label>
                    <label className='w-full'>Gender:-
                        <input onChange={handleChange} value={gender} name="gender" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Gender' />
                    </label>
                </div>
                <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" name="image" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className=" flex gap-5">

                    <select onChange={handleChange} value={category} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="category" id="">
                        <option> Category</option>
                        <option>Shirts</option>
                        <option>t-Shirts</option>
                        <option>Jeasns</option>
                        <option>Hoodies</option>
                        <option>Accessories</option>
                    </select>


                    <select onChange={handleChange} value={size} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="size" id="">
                        <option>Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>

                    </select>
                    <label className='w-full'>Color:-
                        <input onChange={handleChange} value={color} name="color" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Color' />
                    </label>
                </div>
                <label className='w-full'>Desc:-
                    <textarea onChange={handleChange} value={desc} name="desc" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" rows={2} type="text" placeholder='Description' />
                </label>
                <div className=" flex gap-5">
                    <label className='w-full'>Price :-
                        <input onChange={handleChange} value={price} name="price" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Price' />
                    </label>
                    <label className='w-full'>Fabric:-
                        <input onChange={handleChange} value={fabric} name="fabric" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Fabric' />
                    </label>
                    <label className='w-full'>Quantity:-
                        <input onChange={handleChange} value={quantity} name="quantity" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Quantity' />
                    </label>
                </div>
                <button type='submit' className='px-4 py-1 bg-purple-500 rounded-md cursor-pointer hover:bg-purple-400 text-white transition-all text-lg font-semibold'> Upload</button>
            </form>
        </div>
    )
}

export default AddproductModel
