import React from 'react'
import "../../App.css"
import Hero from '../../Components/Hero/Hero'
import CardItems from '../../Card/CardItems/CardItems'
import Footer from "../../Components/Footer/Footer"
const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <CardItems />
            <Footer/>
       </React.Fragment>
    )
}

export default Home
