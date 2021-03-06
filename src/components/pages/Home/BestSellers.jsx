import React from 'react'
import './BestSellers.css'


const BestSellers = ({ products }) => {
    return (
        <>
        <div className="con">
            <div className='my-heading'> 
                <h1 className='featured-title first-title'>Best Sellers</h1>
                <hr className='line' />
            </div>  
            
            <div className='contained'>
                <div className='categories-row'>  
                    {!products ? 'LOADING...' : products.slice(0, 10).sort((a,b) => b.created - a.created).slice(0, 3).map(item => (
                        <div className="card" key={item.id}>
                            <div className="imgBs">
                                <img className='bs-img' src={item.image.url} alt="" />                        
                            </div>
                            <div className="content">
                                <h4 className='bs-title'>{item.name}</h4>
                                {/* <p dangerouslySetInnerHTML={{__html: item.description}} /> */}
                                <p className='bs-body'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, voluptatum? Voluptatibus totam culpa velit. Atque est adipisci eaque sunt, maiores commodi maxime repudiandae? Sunt aspernatur delectus nobis veritatis eaque magnam?
                                </p>
                                <a href={`/productdetails/${item.id}`} className='bs-btn buy-btn' style={{marginLeft: 0}}>View Product</a>
                            </div>
                        </div>
                    ))}
                </div>   
            </div>
        </div>
        </>
    )
}

export default BestSellers
