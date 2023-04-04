import React from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

function Comfirmation() {
  return (
    <div  className='container mx-auto flex justify-center items-center'>
        <div className='bg-white shadow-md md:p-8 p-2 md:w-1/2 w-full mx-2 md:mx-0'>
            <h2 className='text-green-400 font-bold text-2xl'>Success !</h2>
            <p className='font-semibold text-3xl md:my-5'>Your Order has been paid</p>
            <small className='text-gray-700 md:my-2'>Your order has been successfully placed and you will receive it soon</small>
            <div className="md:my-6 ">
                <div>
                    <b>Order Number</b>  : <span>{uuidv4()}</span>
                </div>
                <div>
                    <b>Phone : </b> <span>00000000</span>
                </div>
                <div>
                    <b>Address : </b> <span>2972 Westham St.</span>
                </div>
                
                
                
            </div>
            <Link to={'/'}> <span className='text-blue-500 font-semibold'> Continue Shopping</span>  </Link>
        </div>

    </div>
  )
}

export default Comfirmation