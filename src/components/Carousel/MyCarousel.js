import React, { useState, useEffect } from 'react'
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs'
import { useSwipeable } from 'react-swipeable'
import './styles.css'

export const MyCarouselItem = ({ children, width }) => {
    return (
        <div className='carous-item' style={{ width: width }}>
            {children}
        </div>
    )
}

const MyCarousel = ({ children }) => {
    const [activeIndex, setActiveIndex ] = useState(0);
    const [pause, setPause] = useState(false)

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children - 1);
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
    
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(!pause){
                updateIndex(activeIndex + 1);    
            }
        }, 1000);

        return () => {
            if(interval) {
                clearInterval(interval);
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div {...handlers} className='carous' onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
            <div className='inner-carous' style={{ transform: `translateX(-${activeIndex * 30}%)` }}>
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, { width: '80%' })
                })}

            </div>
            <div className='indicators'>
                {/* <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
                <button onClick={() => updateIndex(activeIndex + 1)}>Next</button> */}
                <BsCaretLeftFill onClick={() => updateIndex(activeIndex - 1)} className='icons' />
                <BsCaretRightFill onClick={() => updateIndex(activeIndex + 1)} className='icons' />
            </div>
            
        </div>
    )
}

export default MyCarousel
