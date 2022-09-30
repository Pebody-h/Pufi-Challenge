import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ name, description, img }) => {
    const String = '> Ver Mas'
    return (
        <div className='product_content'>
            <img src={img} alt={name} className='product_img' />
            <h1>{name}</h1>
            <div className='product_line'></div>
            <p>{description}</p>
            <Link to={'/shop'} className='product_li'>{String}</Link>
        </div>
    )
}