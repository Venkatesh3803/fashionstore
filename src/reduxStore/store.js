import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../reduxStore/cartSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

export default store