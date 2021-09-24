import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import MyCarousel, { MyCarouselItem } from '../Carousel/MyCarousel'


const Categories = () => {
    return (

      <>  
      <div className='my-heading mt-5'> 
                <h1 className='featured-title'>Best Sellers</h1>
                <hr className='line' />
             </div>  
       <div className='contained'>
         <div className='small-container'>
            <div className='categories-row'>
                <div className='column-3'>
                    <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                </div>

                <div className='column-3'>
                    <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/imani-bahati-LxVxPA1LOVM-unsplash_d5eyyk.jpg" alt="" />  
                </div>

                <div className='column-3'>
                    <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249368/ecommerce/barrett-ward-P44RIGl9V54-unsplash_e4mega.jpg" alt="" />
                </div>
            </div> 

          </div>   
         </div>
        
                                     {/* Products */}
         <div className='my-heading'> 
            <h1 className='featured-title'>Featured Products</h1>
            <hr className='line' />
         </div>
        {/* box slider */}
       <div className="box-container">
        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632229770/ecommerce/irene_mznyqm.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#" className='buy-btn'>View Product</a>
                    <a href="#" className='buy-btn'>Add To Cart</a>
                    <a href="#" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#" className='title'>Shoes</a>
                    <span>New Arrival</span>
                </div>
                
                <a href="#" className='price'>$57</a>
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#" className='buy-btn'>View Product</a>
                    <a href="#" className='buy-btn'>Add To Cart</a>
                    <a href="#" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#" className='title'>Apple Watch</a>
                    <span>New Arrival</span>
                </div>
                
                <a href="#" className='price'>$96</a>
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632309029/ecommerce/photo-1503602642458-232111445657_pj9srn.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#" className='buy-btn'>View Product</a>
                    <a href="#" className='buy-btn'>Add To Cart</a>
                    <a href="#" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#" className='title'>Potted Plant</a>
                    <span>New Arrival</span>
                </div>
                
                <a href="#" className='price'>$46</a>
            </div>
        </div>

        <div className='my-box'>
            {/* image box */}
            <div className='slide-image'>
                <img src="https://res.cloudinary.com/plvtinum/image/upload/v1631089741/ecommerce/tshirt_mblh12.jpg" alt="" />
                <div className='my-overlay'>
                    <a href="#" className='buy-btn'>View Product</a>
                    <a href="#" className='buy-btn'>Add To Cart</a>
                    <a href="#" className='buy-btn'>Buy Now</a>
                </div>
            </div>
            {/* detail box */}
            <div className="detail-box">
                <div className='type'>
                    <a href="#"className='title'>T shirt</a>
                    <span>New Arrival</span>
                </div>
                
                <a href="#" className='price'>$36</a>
            </div>
        </div>
      </div>  
                                         {/* Products Carousel Image */}
            
            <div className='my-heading'> 
                <h1 className='featured-title'>Product Slider</h1>
                <hr className='line' />
             </div>     
                
            <MyCarousel>
                <MyCarouselItem>
                    <div className='my-box'>
                            {/* image box */}
                        <div className='slide-image'>
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                            <div className='my-overlay'>
                                <a href="#" className='buy-btn'>View Product</a>
                                <a href="#" className='buy-btn'>Add To Cart</a>
                                <a href="#" className='buy-btn'>Buy Now</a>
                            </div>
                        </div>
                            {/* detail box */}
                        <div className="detail-box">
                            <div className='type'>
                                <a href="#" className='title'>Apple Watch</a>
                                <span>New Arrival</span>
                            </div>
                                
                            <a href="#" className='price'>$96</a>
                        </div>
                    </div>

                <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>


                <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>

                <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>

            

             </MyCarouselItem>
                <MyCarouselItem>
                {/* 1 */}
                 <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>

                {/* 2 */}
                <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>

                {/* 3 */}
                <div className='my-box'>
                {/* image box */}
                  <div className='slide-image'>
                        <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                        <div className='my-overlay'>
                            <a href="#" className='buy-btn'>View Product</a>
                            <a href="#" className='buy-btn'>Add To Cart</a>
                            <a href="#" className='buy-btn'>Buy Now</a>
                        </div>
                 </div>
                    {/* detail box */}
                    <div className="detail-box">
                        <div className='type'>
                            <a href="#" className='title'>Apple Watch</a>
                            <span>New Arrival</span>
                        </div>
                        <a href="#" className='price'>$96</a>
                     </div>
                </div>

                <div className='my-box'>
                            {/* image box */}
                        <div className='slide-image'>
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                            <div className='my-overlay'>
                                <a href="#" className='buy-btn'>View Product</a>
                                <a href="#" className='buy-btn'>Add To Cart</a>
                                <a href="#" className='buy-btn'>Buy Now</a>
                            </div>
                        </div>
                            {/* detail box */}
                        <div className="detail-box">
                            <div className='type'>
                                <a href="#" className='title'>Apple Watch</a>
                                <span>New Arrival</span>
                            </div>
                                
                            <a href="#" className='price'>$96</a>
                        </div>
                    </div>
                </MyCarouselItem>
                <MyCarouselItem>
                <div className='my-box'>
                            {/* image box */}
                        <div className='slide-image'>
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                            <div className='my-overlay'>
                                <a href="#" className='buy-btn'>View Product</a>
                                <a href="#" className='buy-btn'>Add To Cart</a>
                                <a href="#" className='buy-btn'>Buy Now</a>
                            </div>
                        </div>
                            {/* detail box */}
                        <div className="detail-box">
                            <div className='type'>
                                <a href="#" className='title'>Apple Watch</a>
                                <span>New Arrival</span>
                            </div>
                                
                            <a href="#" className='price'>$96</a>
                        </div>
                    </div>

                    <div className='my-box'>
                            {/* image box */}
                        <div className='slide-image'>
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                            <div className='my-overlay'>
                                <a href="#" className='buy-btn'>View Product</a>
                                <a href="#" className='buy-btn'>Add To Cart</a>
                                <a href="#" className='buy-btn'>Buy Now</a>
                            </div>
                        </div>
                            {/* detail box */}
                        <div className="detail-box">
                            <div className='type'>
                                <a href="#" className='title'>Apple Watch</a>
                                <span>New Arrival</span>
                            </div>
                                
                            <a href="#" className='price'>$96</a>
                        </div>
                    </div>

                    <div className='my-box'>
                            {/* image box */}
                        <div className='slide-image'>
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632249369/ecommerce/rachit-tank-2cFZ_FB08UM-unsplash_xshqeh.jpg" alt="" />
                            <div className='my-overlay'>
                                <a href="#" className='buy-btn'>View Product</a>
                                <a href="#" className='buy-btn'>Add To Cart</a>
                                <a href="#" className='buy-btn'>Buy Now</a>
                            </div>
                        </div>
                            {/* detail box */}
                        <div className="detail-box">
                            <div className='type'>
                                <a href="#" className='title'>Apple Watch</a>
                                <span>New Arrival</span>
                            </div>
                                
                            <a href="#" className='price'>$96</a>
                        </div>
                    </div>
                </MyCarouselItem>
            </MyCarousel>

            <div className="offer">
                <div className="small-container">
                    <div className="my-row">
                        <div className="column-2">
                            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1632480896/ecommerce/ian-bevis-IJjfPInzmdk-unsplash_wn9m44.jpg" alt="" />
                        </div>
                        <div className="column-2">
                            <h4>Exclusively Available On Our Store</h4>
                            <h1>Puma</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti molestias numquam, dolore harum neque in vitae eaque eius illum suscipit?</p>
                            <button className='buy-btn my-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="small-container">
                    <div className="my-row">
                        <div className="column-3">
                           <img src="" alt="" />
                           <h3>User</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */} 
                            
                              
                        </div>

                        <div className="column-3">
                           <img src="" alt="" />
                           <h3>User</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */}   
                        </div>

                        <div className="column-3">
                            <img src="" alt="" />
                            <h3>User</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */}  
                        </div>
                    </div>
                </div>
            </div>
       </> 
    )
}

export default Categories
