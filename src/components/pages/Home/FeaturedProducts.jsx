import React from 'react'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
    return (
        <>
          <div className='all-div'>
         <div className='my-heading'> 
            <h1 className='featured-title' style={{marginTop: 20}}>Featured Products</h1>
            <hr className='line' />
         </div>

        {/* box slider */}
       <div className="box-container">
          <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632229770/ecommerce/irene_mznyqm.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#box" className='buy-btn'>View Product</a>
                    <a href="#box" className='buy-btn'>Add To Cart</a>
                    <a href="#box" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#box" className='title'>Shoes</a>
                    <a href="#box" className='price'>$57</a>
                </div>
                <span>New Arrival</span>       
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#box" className='buy-btn'>View Product</a>
                    <a href="#box" className='buy-btn'>Add To Cart</a>
                    <a href="#box" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#box" className='title'>Apple Watch</a>
                    <a href="#box" className='price'>$96</a>
                </div>
                <span className='span'>New Arrival</span>
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632309029/ecommerce/photo-1503602642458-232111445657_pj9srn.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#box" className='buy-btn'>View Product</a>
                    <a href="#box" className='buy-btn'>Add To Cart</a>
                    <a href="#box" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#box" className='title'>Potted Plant</a>
                  <a href="#box" className='price'>$46</a>
                </div>
                <span>New Arrival</span>
                
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1631089741/ecommerce/tshirt_mblh12.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#box" className='buy-btn'>View Product</a>
                    <a href="#box" className='buy-btn'>Add To Cart</a>
                    <a href="#box" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#box"className='title'>T shirt</a>
                  <a href="#box" className='price'>$36</a>
                </div>
                <span>New Arrival</span>              
            </div>
          </div>
         </div>
          </div>
        </>
    )
}

export default FeaturedProducts

