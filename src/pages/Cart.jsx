import React from 'react'
import cartItem from '../components/CartItem'
import { useSelector,useDispatch } from 'react-redux'
import {FaTrashAlt,FaMinus,FaPlus} from 'react-icons/fa'
import { removeItemFromCart,increaseQuantity ,decreaseQuantity,totalInCart} from '../store/cartReducer'

function Cart() {
    const cart = useSelector(state=> state.cart.value)
    const dispatch = useDispatch()
  return (
    <div  className='container mx-auto p-5'>   
        <div className='p-2 flex gap-1'>
            <div className='bg-white p-2 md:w-[80%]'>
                <p className='text-3xl px-4 my-10'>My cart ({cart.length})</p>
                <div className=''>
                    {
                        cart.map((item,index)=>(
                            <div className='flex mb-3 px-3 bg-gray-100 p-5 items-center' key={item.id}>
                                <div className='flex w-[60%] gap-2'>
                                    <img src={item.image} alt="" className='w-12 h-auto'/>
                                    <p>{item.title}</p>
                                </div>

                                <div className='w-[20%] flex'>
                                    <button className='bg-gray-200 px-3' onClick={()=>dispatch(decreaseQuantity(index))}><FaMinus/></button>
                                   <p className='px-4'>{item.quantity}</p>
                                   <button className='bg-gray-200 px-3' onClick={()=>dispatch(increaseQuantity(index))}><FaPlus/></button>
                                </div>

                                <div className='w-[20%]'>
                                    <p className='font-bold'>GHC {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <div onClick={()=>dispatch(removeItemFromCart(index))}>
                                    <FaTrashAlt color='red'/>
                                </div>
                                
                            </div>
                        ))
                    }
                    
                </div>
                
            </div>
            <div className='bg-white p-2 md:w-[20%]'>
                <p className='text-3xl px-4 my-10'>Summary</p>
                <p>{0}</p>
            </div>
        </div>
    </div>
  )
}

export default Cart