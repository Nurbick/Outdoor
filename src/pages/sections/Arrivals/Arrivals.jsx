import React from 'react'
import Slider from './Swiper/Swiper'


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
                    <Slider/>
                </div>
            </div>
        </section>
    )
}

export default Arrivals