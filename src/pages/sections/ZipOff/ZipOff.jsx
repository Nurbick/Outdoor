import React from 'react'
import rightImg from '../../assets/images/ZipOff/zipOff.png'

const ZipOff = () => {
    return (
        <section className='zipOff'>
            <div className="container">
                <div className="zipOff__content">
                    <div className="zipOff__left">
                        <h2 className="zipOff__title">
                        Zip-Offs for all.
                        </h2>
                        <p className="zipOff__text">
                        Our most functional pant now comes in a men’s and women’s version.
                        </p>
                        <button className="zipOff__button">
                        Shop — Rectrek
                        </button>
                    </div>
                    <div className="zipOff__right">
                        <div className="zipOff__img">
                            <img src={rightImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZipOff