import React from 'react'
import Nav from '../Nav/Nav'
import './styles.css'

const Home = ({ Products, categories, handleAddToCart }) => {
    return (
        <>
        <div className='my-container-1'>
           <Nav />
           <div className='text-1'>
                <p>Welcome To</p>
                <h1>Women Souk</h1>
                <h4>There is a little bit of magic found in buying something new.</h4>
                <div className='my-row-1'>
                    <a href="">Explore</a>
                </div>
          </div>
        </div>
        
        </>
    )
}

export default Home
