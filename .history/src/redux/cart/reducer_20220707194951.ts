import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
    email: string;
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart:[]
    },
    reducers: {
        setItemInCart: (state, {payload}: PayloadAction<TPayload>) => {
            state.itemsInCart.push(action.payload)
        }
    }
})