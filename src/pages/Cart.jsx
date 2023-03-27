import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {FaTrashAlt,FaMinus,FaPlus,FaCcVisa,FaCcMastercard,FaPaypal,FaBitcoin} from 'react-icons/fa'
import { removeItemFromCart,increaseQuantity ,decreaseQuantity} from '../store/cartReducer'

import { Link } from 'react-router-dom'

function Cart() {
    const cart = useSelector(state=> state.cart.value)
    const dispatch = useDispatch()

    const total =  cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div  className='container mx-auto p-5'>   
        <div className='p-2 md:flex gap-1 items-start flex-wrap'>
            <div className='bg-white p-2 md:w-[75%]'>
                <p className='text-3xl px-4 my-10'>My cart ({cart.length})</p>
                
                <div className=''>
                    {
                        cart.map((item,index)=>(
                            <div className='flex justify-between mb-3 md:px-3 bg-gray-100 md:p-5 items-center' key={index}>
                                
                                <div className='md:flex md:w-[45%] gap-2 '>
                                    <Link to={`/productdetails/${item.id}`}>
                                        <img src={item.image} alt={item.id} className='w-12 h-auto'/>
                                    </Link>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                                

                                <div className='w-[20%] md:w-[20%] flex'>
                                    <button className='bg-gray-200 md:px-3' onClick={()=>dispatch(decreaseQuantity(index))}><FaMinus/></button>
                                   <p className='md:px-4 px-1'>{item.quantity}</p>
                                   <button className='bg-gray-200 md:px-3' onClick={()=>dispatch(increaseQuantity(index))}><FaPlus/></button>
                                </div>

                                <div className='md:w-[20%] '>
                                    <p className='font-bold'>GHC {(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <div onClick={()=>dispatch(removeItemFromCart(index))}>
                                    <FaTrashAlt color='red'/>
                                </div>
                                
                            </div>
                        ))
                    }
                    
                </div>
                <Link to={'/'} className='text-blue-400'>Continue Shopping</Link>
            </div>
            {
                cart.length >= 1 ?
            
            <div className='bg-white px-4 md:w-[22%] relative'>
                <p className='text-3xl my-10'>Summary</p>
                <p className='font-semibold text-lg '>Tax : 0.00</p>
                <p className='font-bold text-lg '>Total: GHC {total.toFixed(2)}</p>

                <p className='lg:mt-10 my-3'>Payment Methods</p>
                <div className='flex gap-x-2'>
                    <button><FaCcVisa size={25}/></button>
                    <button><FaCcMastercard size={25}/></button>
                    <button><FaPaypal size={25}/></button>
                    <button><FaBitcoin size={25}/></button>
                </div>

                <Link to={'/checkout'} >
                    <button className='bg-green-500 w-full py-2 text-white font-semibold my-5'> CHECKOUT</button>
                </Link>
            </div>: ""
            }
        </div>
    </div>
  )
}

export default Cart