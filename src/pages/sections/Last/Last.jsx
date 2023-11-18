import React from 'react'
import Slider from '../Arrivals/Swiper/Swiper'
import imgLeft from '../../assets/images/Last/imgLeft.png'
import imgRight from '../../assets/images/Last/imgRight.png'

const Last = () => {
    return (
        <section className="arrivals">
            <div className="container">
            <div className="arrivals__content">
                    <div className="arrivals__top">
                        <h2 className="arrivals__title">
                        The Recreationalist                        
                        </h2>
                        <button className="arrivals__button">Read More</button>
                    </div>
                    <Slider images={[imgLeft, imgRight, imgLeft, imgRight, imgLeft, imgRight, imgLeft, imgRight]}/>
                </div>
            </div>
        </section>
    )
}

export default Last