import React from 'react'
import ReactStars from "react-rating-stars-component";
import './Testimonials.css'

const Testimonials = () => {
    return (
        <>
        <div className="con">
            <div className='my-heading'> 
                <h1 className='featured-title'>Testimonials</h1>
                <hr className='line' />
             </div> 

            <div className="testimonials">
                        <div className="review">
                           <img className='img-review' src="https://res.cloudinary.com/plvtinum/image/upload/v1632909671/ecommerce/1_vivays.jpg" alt="" />
                           <h3 className='title-review'>Ella</h3>
                           <ReactStars
                             value={5}
                             onChange={''}
                             size={24}
                             activeColor="#ffd700"
                            />
                            <p className='p-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */}               
                        </div>

                        <div className="review">
                           <img className='img-review' src="https://res.cloudinary.com/plvtinum/image/upload/v1632909198/ecommerce/3_jeszen.jpg" alt="" />
                           <h3 className='title-review'>Erica</h3>
                           <div className='react-stars'>
                           <ReactStars
                             value={5}  
                             onChange={''}
                             size={24}                           
                             filledIcon
                            />
                           </div>
                            <p className='p-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */}   
                        </div>

                        <div className="review">
                            <img className='img-review' src="https://res.cloudinary.com/plvtinum/image/upload/v1632909198/ecommerce/2_s6klvt.jpg" alt="" />
                            <h3 className='title-review'>Rosa</h3>
                            <ReactStars
                             value={5}
                             onChange={''}
                             size={24}
                             activeColor="#ffd700"
                            />
                            <p className='p-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur architecto sit accusantium nisi dolore recusandae quo nobis fugit inventore quidem, magni dicta harum distinctio asperiores hic doloremque doloribus maxime.</p>
                            {/* Rating */}  
                        </div>
                    </div>
        </div>
        </>
    )
}

export default Testimonials
