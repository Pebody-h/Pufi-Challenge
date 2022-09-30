import React from 'react'
import img from '../../Assets/Pufi.png'
import qr from '../../Assets/ScanMe.png'
import security from '../../Assets/Escudo.png'
import Footerimg from '../../Assets/Footerimg.png'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'

export const Footer = () => {
    return (
        <footer className='footer_content'>
            <div className='footer_info'>
                <div>
                    <img src={img} alt="Logo Pufi" className='footer_Logo' />
                </div>
                <div className='footer_ul footer_line'>
                    <ul>
                        <li>PUFI RAIN</li>
                        <li>PUFI PUFF</li>
                        <li>PUFI CART</li>
                        <li>PUFI NAP</li>
                    </ul>
                </div>
                <div className='footer_ul footer_line'>
                    <ul>
                        <li>CONTACTO</li>
                        <li>AYUDA</li>
                        <li>CÓMO COMPRAR</li>
                        <li>TÉRMINOS & CONDICIONES</li>
                    </ul>
                </div>
                <div className='footer_line footer_imgs'>
                    <div className='footer_text'>COMPRA 100% SEGURA</div>
                    <div className='footer_logs'>
                        <img src={qr} alt="Logo Pufi" className='footer_secur' />
                        <img src={security} alt="Logo Pufi" className='footer_secur' />
                        <h2>COMPRA CON <br /> LA GARANTIA <br /> DE PUFI</h2>
                    </div>
                </div>
                <div className='footer_redes'>
                    <h2>SEGUINOS EN</h2>
                    <UilFacebookF className='footer_red' />
                    <UilTwitter className='footer_red' />
                    <UilInstagram className='footer_red' />
                </div>
            </div>
            <div>
                <div className='footer_copyr'>
                    <div className='footer_lef'>
                        <p className="footer_copy">&#169; PUFI Copyright 2017. Todos los derechos reservados</p>
                    </div>
                    <div className='footer_rig'>
                        <img src={Footerimg} alt="Footer Img" />
                    </div>
                </div>
            </div>
        </footer>
    )
}