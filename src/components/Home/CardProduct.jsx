import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ( { product}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        e.stopPropagation()
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: 1,
            productId: product.id
        }
        axios.post(url, data, config)
            .then(res=>{
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(error=>console.log(error.response))
    }
  return (
    <article className='product' onClick={handleClick}>
        <header className='product__header'>
            <img className='product__img' src={product.images[0].url} alt="" />
        </header>
        <section className='product__body'>
            <header className='product__name'>
                <h3>{product.brand}</h3>
                <h2>{product.title}</h2>
            </header>
            <div>
                <div className='product__price-label'>Price</div>
                <div className='product__price-number'>{product.price}</div>
            </div>
            <button onClick={handleBtnClick} className='product__btn'>
                <i className='bx bx-cart'></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct