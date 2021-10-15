import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading';

import './AllProducts.css';

const AllProducts = ({ onAddToCart, products, categories }) => {
    
    const [filter, setFilter] = useState('All Products');
       
    return (
        <>  
                 
            <div className="p-heading">
                <h1 className='p-heading'>{filter}</h1> 
                
                <div className="p-elements">
                        <button className='p-btn' onClick={e => setFilter(e.target.innerText)}>
                            All Products
                        </button>

                   { categories.map(category => (
                        <>   
                            <button onClick={e => setFilter(e.target.innerText)} className='p-btn'>
                                {category.name}
                            </button>      
                        </>  
                     )) }    
                </div>
            </div>

           
            {products.length === 0 
                ? 
                <div className='loading' style={{marginBottom: 200}}>
                    <h1 className='loading-title'>Loading ...</h1>
                    <Loading />
                </div>
                :  '' 
            }
                    
            
           { filter === 'All Products'

            ? <>
                <Grid container spacing={2}>
                    
                    {products.map(product => (
                        <Grid item xs={12} sm={4} lg={3} key={product.id}>
                          
                            <div className="box-container">
                                <div className='my-box'>
                                    {/* image box */}
                                    <div className='slide-image'>
                                        <img src={product.image.url} alt={product.name} />
                                        <div className='my-overlay'>
                                            <Link to={`/productdetails/${product.id}`} className='buy-btn'>View Product</Link>
                                            <button onClick={() => onAddToCart(product.id, 1)} className='buy-btn'>Add To Cart</button>
                                            <Link to={`/cart`} className='buy-btn'>View Cart</Link>
                                        </div>
                                    </div>
                                    {/* detail box */}
                                    <div className="detail-box">
                                        <div className='type'>
                                            <p className='my-title'>{product.name}</p>
                                            <p className='my-price'>{product.price.formatted_with_symbol}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}          
                </Grid>  
               </> 
             
            : categories.map(category => category.name === filter
            
                
            ? <Grid container spacing={2}> 
                        {category.productsData.map(product =>
                        <Grid item xs={12} sm={4} lg={3} key={product.id}>
                            <div className="box-container">
                                <div className='my-box'>
                                    {/* image box */}
                                    <div className='slide-image'>
                                        <img src={product.image.url} alt={product.name} />
                                        <div className='my-overlay'>
                                            <a href={`/productdetails/${product.id}`} className='buy-btn'>View Product</a>
                                            <button onClick={() => onAddToCart(product.id, 1)} className='buy-btn'>Add To Cart</button>
                                            <a href={`/cart`} className='buy-btn'>View Cart</a>
                                        </div>
                                    </div>
                                    {/* detail box */}
                                    <div className="detail-box">
                                        <div className='type'>
                                            <p className='my-title'>{product.name}</p>
                                            <p className='my-price'>{product.price.formatted_with_symbol}</p>
                                        </div>       
                                    </div>
                                </div>
                            </div>    
                        </Grid>   
                        )}  
                </Grid> 
            : '' )
            }
        </>
    )
}

export default AllProducts
