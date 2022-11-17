import { createSlice } from "@reduxjs/toolkit";

interface CartItem  {
    id: number;
    name: string;
    desc: string;
    img: string;
    price: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [] as CartItem[]
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        }
    }
})

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;