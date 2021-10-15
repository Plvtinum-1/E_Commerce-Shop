import React from 'react'
import './Exclusive.css'

const Exclusive = () => {
    return (
        <>
          <div className='all-divs'>
            <div className='my-heading'> 
                <h1 className='featured-title'>Exclusive Offer</h1>
                <hr className='line' />
             </div> 

            <div className="offer">
                <div className="small-container">
                    <div className="my-row">
                        <div className="column-2">
                            <img className='c-img' src="https://res.cloudinary.com/plvtinum/image/upload/v1632480896/ecommerce/ian-bevis-IJjfPInzmdk-unsplash_wn9m44.jpg" alt="" />
                        </div>
                        <div className="column-2">
                            <h4 className='c-h4'>Exclusively Available On Our Store</h4>
                            <h1 className='c-h1'>Puma</h1>
                            <p className='c-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti molestias numquam, dolore harum neque in vitae eaque eius illum suscipit?</p>
                            <button className='buy-btn my-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Exclusive
