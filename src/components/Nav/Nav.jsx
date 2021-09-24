import React, { useState } from 'react'
import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavData from './NavData'
import './styles.css'
import { IconContext } from 'react-icons/lib'
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const Nav = ({ totalItems }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar)
    return (
      <> 
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
          <img className='logo' src="https://res.cloudinary.com/plvtinum/image/upload/v1631978569/ecommerce/Women_backiy.png" alt="WomenSouk" />
            <div className='left'>
              {window.location.pathname !== '/cart' && (
                  <IconButton component={Link} to='/cart' aria-label='Show cart items'>
                    <Badge badgeContent={totalItems} > 
                      <ShoppingCart />
                      {/* <img className='cart' src="https://res.cloudinary.com/plvtinum/image/upload/v1631979346/ecommerce/cart2_xx2cs7.svg" alt="cart" /> */}
                    </Badge>
                  </IconButton>
               )}
              <Link to='/' onClick={toggleSidebar} className={sidebar ? '.hidden menu-bars' : 'menu-bars'}>
                  <Fa.FaBars />
              </Link>
            </div>
        </div>
        
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                  <li className='nav-toggle'>
                      <Link to='#' className='menu-bars'> 
                          <Ai.AiOutlineClose />
                      </Link>
                  </li> 
                    {NavData.map((item, i) => (
                      <>
                      <li className={item.cName} key={i}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </li>
                      <hr className='my-line' />
                      </>
                    ))}
                </ul>               
          </nav>
          </IconContext.Provider>
      </>  
    )
}

export default Nav
