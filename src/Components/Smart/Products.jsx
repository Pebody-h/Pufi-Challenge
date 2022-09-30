import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../Dumb/Product'

export const Products = () => {
    const products = useSelector(state => state.Products)

    return (
        <section className='products_containers'>
            <div className='products_container' id='RAIN'>
                <div className='products_img2'>
                    <div className='products_triangulo'></div>
                    <button>Shop</button>
                </div>
                <div className='products_description'>
                    <Product name={products[0]?.name} description={products[0]?.description} img={products[0]?.img} />
                </div>
            </div>
            <div className='products_container' id='PUFF'>
                <div className='products_description'>
                    <Product name={products[1]?.name} description={products[1]?.description} img={products[1]?.img} />
                </div>
                <div className='products_img1'>
                    <div className='products_triangulo'></div>
                </div>
            </div>
            <div className='products_container' id='CART'>
                <div className='products_img3'>
                    <div className='products_triangulo'></div>
                </div>
                <div className='products_description'>
                    <Product name={products[2]?.name} description={products[2]?.description} img={products[2]?.img} />
                </div>
            </div>
            <div className='products_container' id='NAP'>
                <div className='products_description'>
                    <Product name={products[3]?.name} description={products[3]?.description} img={products[3]?.img} />
                </div>
                <div className='products_img4'>
                    <div className='products_triangulo'></div>
                </div>
            </div>
        </section>
    )
}