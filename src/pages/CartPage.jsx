import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartPages/styles/CartItem'

const CartPage = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {cart} = useSelector(state=>state)

    console.log(cart);

  return (
    <div>
        <div>
            {
                cart?.map(prodInfo => (
                    <CartItem 
                        key={prodInfo.id}
                        prodInfo={prodInfo}
                    />
                ))
            }
        </div>
        <footer>
            <h2>
                <span>Total: </span>
                <span>{JSON.stringify(cart)}</span>
            </h2>
        </footer>
    </div>
  )
}

export default CartPage