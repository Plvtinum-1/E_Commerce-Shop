import React from 'react';
import './AboutSection.css'

const AboutSection = () => {
    return (
        <>  
            <div className='ab-section'>
                 <img src="https://res.cloudinary.com/plvtinum/image/upload/v1633436672/ecommerce/anthony-esau-N2zk9yXjmLA-unsplash_s6hwwh.jpg" alt="" />
                 <div className="overlay overlayFade">
                    <div className='ab-content'>
                        <p className='ab-item'>About</p>
                        <h1 className='ab-title'>Women Souk</h1>
                        <p className='ab-text'>Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same way.</p>
                    </div> 
                 </div>              
            </div>
        </>
    )
}

export default AboutSection
