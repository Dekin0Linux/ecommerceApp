import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const notify = (msg,status) => {
    if(status === 'added'){
        toast.success(msg)
    }
    if(status === 'already'){
        toast.error(msg)
    }
    if(status === 'removed'){
        toast.error(msg)
    }
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        value:[].reverse()
    },

    reducers :{
        addItemToCart : (state,action)=>{

            
            
            //check if item is already added
            const item = state.value.find(item => item.id === action.payload.id)

            if(item){
                notify('Item already Added','already')
                return state
            }
            state.value.push(action.payload)
            notify('Item added successfully', 'added')

        },
        removeItemFromCart:(state,action)=>{
            state.value.splice(action.payload,1)
            notify('Item Removed','removed')
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