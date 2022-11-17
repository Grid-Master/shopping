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
        itemsInCart:[]
    },
    reducers: {
        setItemInCart: (state, {payload}: PayloadAction<TPayload>) => {
            state.itemsInCart.push(payload)
        }
    }
})