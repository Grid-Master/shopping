import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
        id: number;
        name: string;
        desc: string;
        img: string;
        price: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[] as CartItem
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        }
    }
})