import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles'
import logo from '../../assests/commerce.png'


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                     <Typography component={Link} to='/'>
                         <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />  
                     </Typography>
                     <Typography component={Link} to='/' className={classes.spacing}>Home</Typography>
                     <Typography component={Link} to='/categories' className={classes.spacing}>Categories</Typography>
                    

                     {/* <Typography component={Link} to='/products' className={classes.spacing}>All Products</Typography> */}
                     {/* <Typography component={Link} to='/form' className={classes.spacing}>Form</Typography> */}
                     {/* <Typography className={classes.spacing}>About Us</Typography>
                     <Typography className={classes.spacing}>Contact Us</Typography> */}
                     
                   <div className={classes.grow} />
                   <div>
                       {location.pathname !== '/cart' && (
                       <IconButton component={Link} to='/cart' aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'><ShoppingCart /></Badge>
                       </IconButton>
                       )}
                   </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
