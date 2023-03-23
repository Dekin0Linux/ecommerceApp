import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState : {value:[].reverse()},

    reducers :{
        addItemToCart : (state,action)=>{
            state.value.push(action.payload)
            alert('Item Added Successfully')
        },
        removeItemFromCart:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        increaseQuantity:(state,action)=>{
            state.value[action.payload].quantity += 1
        },
        decreaseQuantity:(state,action)=>{
            if(state.value[action.payload].quantity === 1){
                return state
            }
            state.value[action.payload].quantity -= 1
        },
        
        
    }
})

export const {addItemToCart,removeItemFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer