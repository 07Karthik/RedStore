import React from 'react'
import Hero from '../Components/Hero/Hero'
import HomeSample from '../Components/HomeSample/HomeSample'
import "./css/Home.css"
import FeatureProducts from '../Components/FeaturedProducts/FeatureProducts'
import LatestProduct from '../Components/LatestProducts/LatestProduct'
import Banner from '../Components/Banner/Banner'
import Test from '../Components/TestO/Test'
import Logo from '../Components/Logos/Logo'

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <div className="width-1">
            <HomeSample />
            <FeatureProducts/>
            <LatestProduct/>
            </div>
            
            <Banner/>
            <div className="width-1">
            <Test/>
            <Logo/>

            </div>

        </div>
    )
}

export default Home
