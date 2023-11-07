import React from 'react'
import trailImg from '../../assets/images/Trail/trailImg.png'

const Trail = () => {
    return (
        <section className='trail'>
            <div className="container">
                <div className="trail__content">
                    <div className="trail__left">
                        <div className="trail__img">
                            <img src={trailImg} alt="" />
                        </div>
                    </div>
                    <div className="trail__right">
                        <h2 className="trail__title">
                        Trail mix or granola?
                        </h2>
                        <p className="trail__text">
                        Be the hiking buddy who brings the Snacks.
                        </p>
                        <button className="trail__button">
                        Shop — Leggings
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trail