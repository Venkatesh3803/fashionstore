import React, { useState } from 'react'
import AddressModel from '../components/addressModel'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'

const Checkout = () => {
  const [payment, setPayment] = useState("")
  const [cod, setCod] = useState(false)
  const handlePayment = () => {

  }
  return (
    <div>
      <Annocement />
      <Navber />
      <>
        <div className="md:flex bg-purple-100">
          <div className='p-20 ' style={{ flex: "2.5" }}>
            <div className="flex flex-col gap-3 mt-4  shadow-sm">
              <div className="flex justify-between gap-4 shadow-md p-8">
                <div className="md:flex gap-3 items-center ">
                  <img className='w-28 h-28 rounded-md object-cover ' src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="" />
                  <div className=" flex flex-col gap-1">
                    <span className='font-semibold text-lg'>Best shirt for men</span>
                    <span className=''>size :- L</span>
                    <div className="flex items-center gap-2">
                      <span className=''>Qty :- 2</span>
                    </div>
                    <span>color :- Olive</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className='text-lg font font-semibold'>price</span>
                    <span className='text'>₹899</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4 shadow-md p-8">
                <div className="flex gap-3 items-center ">
                  <img className='w-28 h-28 rounded-md object-cover ' src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="" />
                  <div className=" flex flex-col gap-1">
                    <span className='font-semibold text-lg'>Best shirt for men</span>
                    <span className=''>size :- L</span>
                    <div className="flex items-center gap-2">
                      <span className=''>Qty :- 2</span>
                    </div>
                    <span>color :- Olive</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className='text-lg font font-semibold'>price</span>
                    <span className='text'>₹899</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div style={{ flex: "1.5" }}>
            <div className="w-2/3 mx-auto my-20  bg-purple-200 rounded-sm p-5 flex flex-col gap-6">
              <span className='font-semibold text-xl'>
                CheckOut
              </span>
              <div className="flex justify-around">
                <ul><li className='font-medium'>No.of Products</li></ul>
                <ul><li>12</li></ul>
              </div>
              <div className="flex justify-around">
                <ul><li className='font-medium'> Discount</li></ul>
                <ul><li>22%</li></ul>
              </div>
              <div className="flex justify-around">
                <ul><li className='font-medium'>Shipping</li></ul>
                <ul><li>₹80</li></ul>
              </div>

              <div className="border-t border-black flex justify-around">
                <ul><li className='font-medium mt-3'>Total Amount</li></ul>
                <ul><li className='mt-3'>₹4500</li></ul>
              </div>
              {payment ? "" : <button onClick={() => setPayment(true)} className='self-end px-6 py-2 bg-purple-500 rounded-lg hover:bg-purple-400 transition-all text-white font-semibold'>Continue</button>}
              {payment &&
                <>
                  <div className=" flex gap-3">
                    <button onClick={() => setCod(true)} className='self-end px-6 py-2 text-white font-semibold bg-purple-500 rounded-lg hover:bg-purple-400 transition-all'>Cash On Delivery</button>
                    <button onClick={handlePayment} className='self-end px-5 py-2 bg-green-500 rounded-lg hover:bg-green-400 transition-all text-white font-semibold'>PayOnline</button>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
        {cod && <AddressModel setCod={setCod} />}
      </>
      <Banner />
      <Footer />
    </div>
  )
}

export default Checkout
