import React from 'react'
import './Header.styles.scss'
import {ReactComponent as Logo} from '.././asset/4.2 crown.svg'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <Link to='/'>
                    <Logo/>
                </Link>
            </div>

            <div className="options">
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header
