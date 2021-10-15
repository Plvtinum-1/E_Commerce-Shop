import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as Fa from 'react-icons/fa'
import * as Gi from 'react-icons/gi'


import { IconContext } from 'react-icons/lib'
import { Badge } from '@material-ui/core'


const Navbar = ({ totalItems }) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const showButton = () => window.innerWidth <= 960 ? setButton(true) : setButton(false)

    useEffect(() => {
         showButton()
        window.addEventListener('resize', showButton)
        return () => {
            // cleanup
            window.removeEventListener('resize', showButton)
        }
    //input
    }, [])

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <div className='navbar-container m-container'>
                    <Link
                     to='/' 
                     className="m-nav-links"
                    >
                    <h1 className='nav-title'>Women Souk</h1>  
                    </Link>

                    <div className='nav-con'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <Link to='/allproducts' className='nav-links'>
                            <li className="nav-item">Products</li>
                            </Link>
                            <Link to='/contact' className='nav-links'>
                            <li className="nav-item">Contact</li>
                            </Link>
                            <Link to='/about' className='nav-links'>
                            <li className="nav-item">About Us</li>
                            </Link>
                        </ul>

                        <Link className='cart-icon' to='/cart'>
                         <Badge badgeContent={totalItems} color='secondary'><Gi.GiShoppingCart /></Badge>
                        </Link>

                    </div>

                    <div 
                    style={button ? {display: 'flex'} : {display: 'none'}} 
                    className='menu-icon'
                    onClick={handleClick}
                    >
                        {click ? <Fa.FaTimes /> : <Fa.FaBars />}
                    </div>
                </div>
            </nav>
           </IconContext.Provider> 
        </>
    )
}

export default Navbar

