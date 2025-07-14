import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArrivals from '../components/NewArrivals'
import Banner from '../components/Banner'
import PopularProduct from '../components/PopularProduct'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        <Hero/>
        <Features/>
        <NewArrivals/>
        <Banner/>
        <PopularProduct/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default Home