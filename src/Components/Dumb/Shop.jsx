import React from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {
    return (
        <div className='shop_container'>
            <button><Link to={'/'} className='shop_prev'>REGRESA</Link></button>
        </div>
    )
}