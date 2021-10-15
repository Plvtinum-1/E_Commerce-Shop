import React from 'react';
import './Footer.css'

const Footer = ({ products }) => {
    return (
        <>
            <footer className='footer' >
                <nav className='nav'>
                    <ul className='nav-l'>
                        <h1 className='f-title'>Women Souk</h1>
                        <li className='nav-i'>Copyright &copy;</li>
                    </ul>
                    <div className='m-nav-links'>
                        <div className='div-item'>
                           <h4 className='nav-t'>Links</h4> 
                           <li className='nav-i'>About Us</li>
                           <li className='nav-i'>Contact</li>
                           <li className='nav-i'>Delivery</li>
                        </div>  
                        <div className='div-item'>
                           <h4 className='nav-t'>Social Media</h4>
                           <li className='nav-i'>Facebook</li>
                           <li className='nav-i'>Instagram</li>
                           <li className='nav-i'>Snapchat</li> 
                        </div>     
                    </div>
                </nav>

            </footer>
       </> 
    )
}

export default Footer
