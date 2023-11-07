import React from 'react'
import logo from '../assets/images/Grouplogo.svg'
import user from '../assets/images/user.png'
import lock from '../assets/images/lock.png'
import search from '../assets/images/search.png'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__links">
                        <li className="header__link">Women</li>
                        <li className="header__link">Men</li>
                        <li className="header__link">OV Kits</li>
                    </ul>

                    
                    <h1 className="header__logo">
                        <img src={logo} alt="" />
                    </h1>

                    <ul className="header__icons">
                        <li className="header__icon">
                            <img src={search} alt="" />
                        </li>
                        <li className="header__icon">
                            <img src={user} alt="" />
                        </li>
                        <li className="header__icon">
                            <img src={lock} alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header