import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'

function Shipping() {
  const cart = useSelector(state=> state.cart.value)
  const total =  cart.reduce((total, item) => total + item.quantity * item.price, 0);

  let navigate = useNavigate()

  return (
    <div  className='container mx-auto p-5'>   
        <div className='p-2 flex gap-5 items-start flex-wrap'>

            <form className='bg-white p-5 md:w-[60%]'>
              <p className='font-semibold text-xl'>Shipping Detail</p>
              <div action="" className='mt-5'>
                <div className='md:flex gap-x-5 mb-8'>
                  <input type="text" placeholder='Firstname' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 mb-8 md:mb-0'/>
                  <input type="text" placeholder='Lastname' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 md:mb-0'/>
                </div>
                <input type="text" placeholder='Country' className='w-full p-2 mb-8 border rounded-md outline-none'/>
                <input type="text" placeholder='City' className='w-full p-2 mb-8 border rounded-md outline-none'/>
                <input type="text" placeholder='Shipping Address' className='w-full p-2 mb-8 border rounded-md outline-none'/>
                <input type="text" placeholder='Postal Code' className='w-full p-2 mb-8 border rounded-md outline-none'/>
                <input type="text" placeholder='Phone' className='w-full p-2 mb-8 border rounded-md outline-none'/>

                <p className='font-semibold text-lg'>Payment Details</p>
                <small >Choose payment method</small>
                <input type="text" placeholder='Card Number' className='w-full p-2 mb-8 mt-3 border rounded-md outline-none'/>
                <input type="text" placeholder='Name on Card' className='w-full p-2 mb-8 border rounded-md outline-none'/>
                <div className='md:flex gap-x-5 mb-8'>
                  <input type="text" placeholder='Expiration Date' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 mb-8 md:mb-0'/>
                  <input type="text" placeholder='CVV' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 md:mb-0'/>
                </div>
              </div>
                
            </form>
           
            <div className='bg-white px-4 md:w-[30%] w-full relative p-5'>
              <p className='font-semibold text-xl'>Your Order</p>
              <div>
                    {
                        cart.map((item,index)=>(
                            
                            
                            <div className='flex mb-3 px-3 bg-gray-100 p-5 items-center' key={index}>
                                
                                <div className='flex w-[70%] gap-2'>
                                    <Link to={`/productdetails/${item.id}`}>
                                        <img src={item.image} alt={item.id} className='w-12 h-auto'/>
                                    </Link>
                                    <small className='overflow-hidde'>{item.title}</small>
                                </div>

                                  <p className='px-4'>x{item.quantity}</p>
                          
                                <div className='w-[30%]'>
                                    <p className='font-bold'>GHC {(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                            </div>
                            
                            
                        ))
                    }
                    <p className='font-semibold text-gray-500'>Total cost : GHC {total}</p>
                    
                      <button className='bg-green-500 w-full py-2 text-white font-semibold my-4' onClick={()=>navigate('/confirm')}> PAY NOW </button>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default Shipping