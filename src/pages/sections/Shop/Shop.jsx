import React from 'react'
import menShop from '../../assets/images/Shop/manShop.png'  // Image for the riht side
import womenShop from '../../assets/images/Shop/womenShop.png' // Image for the left side

const Shop = () => {
    return (
        <section className='shop'>
            <div className="container">
                <div className="shop__content">


                    {/* Left side  */}
                    <div className="shop__left shop__part">
                        <img src={menShop} alt="" className="shop__img" />
                    </div>


                    {/* Right side */}
                    <div className="shop__right shop__part">
                        <img src={womenShop} alt="" className="shop__img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop