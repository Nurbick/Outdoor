import React from 'react'
import Slider from './Swiper/Swiper'
import swiperLeft from '../../assets/images/Swiper/swiperRight.png'
import swiperRight from '../../assets/images/Swiper/swiperLeft.png'


const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__content">
                    <div className="arrivals__top">
                        <h2 className="arrivals__title">
                        This just in.
                        </h2>
                        <button className="arrivals__button">Shop — New Arrivals</button>
                    </div>
                    <Slider images={[swiperLeft, swiperRight, swiperRight, swiperLeft, swiperLeft, swiperRight]}/>
                </div>
            </div>
        </section>
    )
}

export default Arrivals