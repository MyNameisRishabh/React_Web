import {configureStore} from '@reduxjs/toolkit'
import { CartReducer, initialProductDetailsReducer } from '../Reducer/reducer'

export const store = configureStore({
    reducer: {
        productDetail : initialProductDetailsReducer,
        cart: CartReducer
    }
})