import React from 'react'
import Nav from '../Nav/Nav'
import './styles.css'

const Home = () => {
    return (
        <>
             
        <div className='container'>
               <Nav />
            
            <div className='text'>
                <p>Welcome To</p>
                <h1>Women Souk</h1>
                <h4>There is a little bit of magic found in buying something new.</h4>

                <div className='row'>
                    <a href="">Explore</a>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home
