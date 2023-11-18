import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Story = () => {
    return (
        <section className="story">
            <div className="container">
                <div className="story__content">

                <p className="story__text">
                Outdoor Voices is on a mission to get the world moving. We believe freeing fitness from performance starts with having fun and generating endorphins. That's why we create high quality products for Recreation that make you feel strong, confident, and ready for
                </p>

                <span className="story__desc">
                #DoingThings
                </span>

                <a href="" className="story__link">
                <span>Our Story</span> <FaArrowRight size={20}/>
                </a>

                </div>
                
            </div>
        </section>
    )
}

export default Story