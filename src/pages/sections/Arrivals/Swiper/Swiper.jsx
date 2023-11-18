import React from 'react'
import {Autoplay, Mousewheel} from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'


const Slider = ({images}) => {

    // const swiper = useSwiper()

    

    return (
        
        <div className="arrivals__slider">
                        <Swiper
                        modules={[Autoplay, Mousewheel]}
                        autoplay = {true}
                        slidesPerView={2}
                        mousewheel ={true}
                        spaceBetween={2}
                        keyboard = {true}
                        >
                            {/* <i className="arrivals__slider-left" onClick={() => swiper.slidePrev()}>
                                <AiOutlineArrowLeft size={25}/>
                            </i> */}
                            {
                                images.map((item, idx)=>(
                                    <SwiperSlide key={idx} className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={item} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Rectrek Zip-Off Pant
                                </h3>
                                <p className="arrivals__slider-desc">
                                4 colors available.
                                </p>
                            </SwiperSlide>
                                ))
                            }
                            {/* <i className="arrivals__slider-right" onClick={()=> swiper.slideNext()}>
                                <AiOutlineArrowRight size={25}/>
                            </i> */}
                        </Swiper>
                    </div>
    )
}

export default Slider