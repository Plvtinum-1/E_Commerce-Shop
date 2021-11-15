import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const BCarousel = () => {
    return (
        <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/plvtinum/image/upload/v1636988342/ecommerce/second_i9nrkv.png"
                alt="Forth slide"
                />
                 <button className='buy-btn' style={{position: 'absolute', bottom: 120, left: 340}}><a href='/productdetails/prod_4OANwRGKJqovYL'>Shop Now</a></button>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://res.cloudinary.com/plvtinum/image/upload/v1636987979/ecommerce/4739087_r1jznw.png"
                alt="Third slide"
                />
                 <button className='buy-btn' style={{position: 'absolute', bottom: 150, right: 400}}><a href='/productdetails/prod_zkK6oL90nK5Xn0'>Shop Now</a></button>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>  
        </>
    )
}

export default BCarousel


