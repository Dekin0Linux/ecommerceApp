import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const notify = (msg,status,position) => {
    if(status === 'added'){
        toast.success(msg,{position})
        
    }
    if(status === 'already'){
        toast.error(msg,{position})
        
    }
    if(status === 'removed'){
        toast.error(msg,{position})
       
    }
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        value:[].reverse(),
        name : ''
    },

    reducers :{
        addItemToCart : (state,action)=>{

            
            
            //check if item is already added
            const item = state.value.find(item => item.id === action.payload.id)

            if(item){
                notify('Item already Added','already',"bottom-center")
                return state
            }
            state.value.push(action.payload)
            notify('Item added successfully', 'added',"bottom-center")

        },
        removeItemFromCart:(state,action)=>{
            state.value.splice(action.payload,1)
            notify('Item Removed','removed',"bottom-center")
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
        searchName : (state,action)=>{
            state.name = action.payload
        }
        
        
    }
})

export const {addItemToCart,removeItemFromCart,increaseQuantity,decreaseQuantity,searchName} = cartSlice.actions

export default cartSlice.reducer