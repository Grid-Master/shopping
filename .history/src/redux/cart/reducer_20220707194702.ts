import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[]
    },
    reducers: {
        setItemInCart: (state, {payload}: PayloadAction) => {
            state.itemsInCart.push(payload)
        }
    }
})