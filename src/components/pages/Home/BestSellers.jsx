import React from 'react'
import './BestSellers.css'


const BestSellers = () => {
    return (
        <>
        <div className='all-div'>
        <div className='my-heading'> 
            <h1 className='featured-title first-title'>Best Sellers</h1>
            <hr className='line' />
        </div>  
       <div className='contained'>
         <div className='small-container'>
            <div className='categories-row'>
            <div className="card">
                    <div className="imgBs">
                     <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />                        
                    </div>
                    <div className="content">
                        <h4 className='bs-title'>Apple Watch</h4>
                        <p className='bs-body'>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, voluptatum? Voluptatibus totam culpa velit. Atque est adipisci eaque sunt, maiores commodi maxime repudiandae? Sunt aspernatur delectus nobis veritatis eaque magnam?
                        </p>
                       <button className='bs-btn'>View Product</button>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBs">
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />                        
                    </div>
                    <div className="content">
                        <h4 className='bs-title'>Apple Watch</h4>
                        <p className='bs-body'>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, voluptatum? Voluptatibus totam culpa velit. Atque est adipisci eaque sunt, maiores commodi maxime repudiandae? Sunt aspernatur delectus nobis veritatis eaque magnam?
                        </p>
                       <button className='bs-btn'>View Product</button>
                    </div>  
                </div>
                <div className="card">
                    <div className="imgBs">
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />                        
                    </div>
                    <div className="content">
                        <h4 className='bs-title'>Apple Watch</h4>
                        <p className='bs-body'>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, voluptatum? Voluptatibus totam culpa velit. Atque est adipisci eaque sunt, maiores commodi maxime repudiandae? Sunt aspernatur delectus nobis veritatis eaque magnam?
                        </p>
                       <button className='bs-btn'>View Product</button>
                    </div>
                </div>
            </div> 

        </div>   
        </div>
        </div>
        </>
    )
}

export default BestSellers
