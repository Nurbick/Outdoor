import React from 'react'
import swiperLeft from '../../../assets/images/Swiper/swiperLeft.png'
import swiperRight from '../../../assets/images/Swiper/swiperRight.png'
import {Autoplay, Mousewheel} from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'


const Slider = () => {

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
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperLeft} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Primo Fleece Vest
                                </h3>
                                <p className="arrivals__slider-desc">
                                3 colors available.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperRight} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Rectrek Zip-Off Pant
                                </h3>
                                <p className="arrivals__slider-desc">
                                4 colors available.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperLeft} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Primo Fleece Vest
                                </h3>
                                <p className="arrivals__slider-desc">
                                3 colors available.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperRight} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Rectrek Zip-Off Pant
                                </h3>
                                <p className="arrivals__slider-desc">
                                4 colors available.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperLeft} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Primo Fleece Vest
                                </h3>
                                <p className="arrivals__slider-desc">
                                3 colors available.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='arrivals__slider-slide'>
                                <div className="arrivals__slider-img">
                                    <img src={swiperRight} alt="" />
                                </div>
                                <h3 className="arrivals__slider-title">
                                Rectrek Zip-Off Pant
                                </h3>
                                <p className="arrivals__slider-desc">
                                4 colors available.
                                </p>
                            </SwiperSlide>
                            {/* <i className="arrivals__slider-right" onClick={()=> swiper.slideNext()}>
                                <AiOutlineArrowRight size={25}/>
                            </i> */}
                        </Swiper>
                    </div>
    )
}

export default Slider