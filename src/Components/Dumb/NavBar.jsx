import React from 'react'
import { Link } from 'react-router-dom'
import { UilKayak } from '@iconscout/react-unicons'
import { UilUmbrella } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { UilBackpack } from '@iconscout/react-unicons'

export const NavBar = () => {
    return (
        <nav className='navbar_nav'>
            <div className='navbar_logo'>Pufi</div>
            <div className='navbar_menu'>
                <div className='navbar_item navbar_space'>
                    <UilKayak className='navbar_it' />
                    <a href="#PUFF">PUFI PUFF</a>
                </div>
                <div className='navbar_item navbar_space'>
                    <UilUmbrella className='navbar_it' />
                    <a href="#RAIN">PUFI RAIN</a>
                </div>
                <div className='navbar_item navbar_space'>
                    <UilShoppingBag className='navbar_it' />
                    <a href="#CART">PUFI CART</a>
                </div>
                <div className='navbar_item'>
                    <UilBackpack className='navbar_it' />
                    <a href="#NAP">PUFI NAP</a>
                </div>
            </div>
            <div className='navbar_Perfil'>
                <div className='navbar_li'>
                    <Link to={'/shop'}>Mi Cuenta</Link>
                </div>
                <div>
                    <Link to={'/shop'}>Mi Compra</Link>
                </div>
            </div>
        </nav>
    )
}