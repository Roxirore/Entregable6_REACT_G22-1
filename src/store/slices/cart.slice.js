import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import config from "../../utils/getConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => action.payload
    }
})


export const { setCart } = cartSlice.actions

export default cartSlice.reducer

export const getCartThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    axios.get(url, config)
        .then(res=>dispatch(setCart(res.data)))
        .catch(error=>console.log(error))
}