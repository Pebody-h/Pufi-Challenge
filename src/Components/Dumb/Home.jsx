import React from 'react'
import { Carrucel } from './Carrucel'
import { Products } from '../Smart/Products'
import { NavBar } from './NavBar'
import { Galery } from './Galery'
import { Newsletter } from './Newsletter'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <>
            <NavBar />
            <Carrucel />
            <Products />
            <Galery />
            <Newsletter />
            <Footer />
        </>
    )
}