import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Pufi.png'

export const Component404 = () => {
    return (
        <div className='component404_error'>
            <img src={Logo} alt="Logo Pufi" />
            <h1>PAGINA NO ENCONTRADA</h1>
            <button><Link to={'/'} className='component404_prev'>REGRESA</Link></button>
        </div>
    )
}