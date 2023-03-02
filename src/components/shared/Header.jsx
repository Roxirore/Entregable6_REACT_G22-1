import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__logo'><Link className='header__logo-link' to='/'>ecommerce</Link>
            </h1>
        <nav>
            <ul className='header__list'>
                <li className='header__item'><Link className='header__link' to='/user/login'>Login</Link></li>
                <li className='header__item'><Link className='header__link' to='/'>Purchases</Link></li>
                <li className='header__item'><Link className='header__link' to='/cart'>Cart</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header