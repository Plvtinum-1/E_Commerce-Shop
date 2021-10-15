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
                src="images/banner.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/RedShoes.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/beige.png"
                alt="Forth slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>  
        </>
    )
}

export default BCarousel


