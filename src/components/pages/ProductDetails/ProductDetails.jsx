import React from 'react';
import { useParams } from 'react-router';
import PageNotFound from '../PageNotFound/PageNotFound';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = ({ products, onAddToCart }) => {
    
    let myId = useParams().id
    const OneProduct = products.filter(product => product.id === myId)[0]

    if(products.length === 0 && !OneProduct) 
    return(
       <> 
        <div className='loading'>
            <h1 className='loading-title'>Loading ...</h1>
             <Loading />
        </div>
      </>
    )

    else if(products && OneProduct)
    return (
       <div className='container p-cont'>
           <div className="carousel">
               <img className='carousel-i' src={OneProduct.image.url} alt="" />
           </div>  
           <div className="p-body">
               <div className="p-one-elements">   
                    <h1 className='p-one-title'>{OneProduct.name}</h1>    
                    <h3 className='p-one-price'>{OneProduct.price.formatted_with_symbol}</h3> 
                    {/* <p className='p-one-body' dangerouslySetInnerHTML={{__html: OneProduct.description}} /> */}
                    <p className='p-one-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>  
                
                <div className="p-one-buttons">
                    <button onClick={() => onAddToCart(OneProduct.id, 1)} className='p-one-button buy-btn'>Add To Cart</button>
                    <button onClick={() => onAddToCart(OneProduct.id, 1)} className='p-one-button buy-btn'><Link to={`/cart`}>Buy Now</Link></button>
                </div>
             
           </div>
         
       </div> 
    )

    else return (
     <> 
       <PageNotFound />
     </>
   )
   
}

export default ProductDetails

