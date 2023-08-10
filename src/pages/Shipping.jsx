import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { PaystackButton } from 'react-paystack'

function Shipping() {
  const cart = useSelector(state=> state.cart.value)
  const total =  cart.reduce((total, item) => total + item.quantity * item.price, 0);

  let amount = total *100

  let navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  // PAYSTACK COMP-PROPS
  const componentProps = {
    email,
    amount,
    currency : "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert('Your Order Is being Processed')
      navigate('/')
    }
      ,
    onClose: () => alert("Wait! Don't leave :("),
  }

  

  return (
    <div  className='container mx-auto p-5'>   
        <form className='p-2 flex gap-5 items-start flex-wrap' onSubmit={handleSubmit}>

            <div className='bg-white p-5 md:w-[60%]' >
              <p className='font-semibold text-xl'>Shipping Detail</p>
              <div action="" className='mt-5'>
                <div className='md:flex gap-x-5 mb-8'>
                  <input type="text" placeholder='Email' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 mb-8 md:mb-0' onChange={e=>setEmail(e.target.value)} required/>
                  <input type="text" placeholder='Fullname' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 md:mb-0' onChange={e=>setName(e.target.value)} required/>
                  <input type="text" placeholder='Phone' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 md:mb-0' onChange={e=>setPhone(e.target.value)} required/>
                  <input type="text" placeholder='Address' className='flex-1 p-2 border rounded-md outline-none w-full md:w-0 md:mb-0' onChange={e=>setAddress(e.target.value)} required/>

                </div>
                
              </div>
                
            </div>
           
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
                    
                      <PaystackButton {...componentProps} type='submit' className='bg-green-500 w-full py-2 text-white font-semibold my-4' /> 
              </div>
                
            </div>
        </form>
    </div>
  )
}

export default Shipping