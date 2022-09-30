import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom'


export const Carrucel = () => {
    return (
        <section className='carrusel_baner'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='carrusel_slides carrusel_slide1'>
                        <h2>ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.</h2>
                        <button className='carrusel_buton'><Link to={'/shop'} className='carrusel_link'>Shop</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carrusel_slides carrusel_slide2'>
                        <h2>ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.</h2>
                        <button className='carrusel_buton'><Link to={'/Shop'} className='carrusel_link'>Shop</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carrusel_slides carrusel_slide3'>
                        <h2>ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.</h2>
                        <button className='carrusel_buton'><Link to={'/Shop'} className='carrusel_link'>Shop</Link></button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}