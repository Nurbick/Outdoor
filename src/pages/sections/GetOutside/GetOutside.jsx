import React from 'react'

// Image for the right side
import getOutsideImg from '../../assets/images/getOutside/getOutsideImg.png'  

const GetOutside = () => {
    return (
        <section className='getOutside'>
            <div className="container">
                <div className="getOutside__content">


                    {/* Left Side */}

                    <div className="getOutside__left">

                        <h2 className="getOutside__title">
                        Get outside.
                        </h2>

                        <p className="getOutside__text">
                        Recreational essentials for your stomping grounds — wherever they may be.
                        </p>

                        <button className="getOutside__button">
                        Shop — Shoes & Accessories
                        </button>

                    </div>

                    {/* Right side */}

                    <div className="getOutside__right">

                        {/* Image on the right side */}
                        <div className="getOutside__image">
                            <img src={getOutsideImg} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default GetOutside