import React from 'react'
import Footer from '../components/footer'
import Navber from '../components/navber'
import Hero from "../components/hero"
import Category from '../components/category'
import Feature from '../components/feature'
import Trending from '../components/trending'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Designers from '../components/designers'


const Homepage = () => {
    return (
        <div className=''>
            <Annocement />
            <Navber />
            <Hero />
            <Feature />
            <Category />
            <Trending />
            <Designers />
            <Banner />
            <Footer />
        </div>
    )
}

export default Homepage
