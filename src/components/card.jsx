import React from 'react'
import { Link } from 'react-router-dom'
import { productItems } from '../data/productData'
const Card = ({ trending, similar, Featured }) => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {trending &&
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{trending}</h2>
                }
                {similar &&
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{similar}</h2> 
                }
                {Featured &&
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{Featured}</h2> 
                }
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-0 ">
                    {productItems.slice(0, 8).map((product) => (
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
    )
}



export default Card
