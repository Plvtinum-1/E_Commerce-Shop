import React from 'react'
import './About.css'

const About = () => {
    return (

        <div className='ab-section' style={{height: '70%'}}>
            <img src="https://res.cloudinary.com/plvtinum/image/upload/v1633436672/ecommerce/anthony-esau-N2zk9yXjmLA-unsplash_s6hwwh.jpg" alt="" />
            <div className="overlay overlayFade">
                <div className='ab-content'>
                    <p className='ab-item'>About</p>
                    <h1 className='ab-title' style={{fontSize: 30}}>Women Souk</h1>
                    <p className='ab-text'>Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.</p>
                    <p className="ab-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus beatae consequatur vero delectus accusantium eaque nam expedita quis, exercitationem iste vitae iure suscipit hic fuga laboriosam natus itaque deleniti?</p>
                    <p className="ab-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus beatae consequatur vero delectus accusantium eaque nam expedita quis, exercitationem iste vitae iure suscipit hic fuga laboriosam natus itaque deleniti?</p>
                    <p className="ab-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus beatae consequatur vero delectus accusantium eaque nam expedita quis, exercitationem iste vitae iure suscipit hic fuga laboriosam natus itaque deleniti?</p>
                </div> 
            </div>             
        </div>
    )
}

export default About
