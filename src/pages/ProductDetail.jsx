import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {FaMinus,FaPlus} from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addItemToCart } from '../store/cartReducer'
import { ToastContainer } from 'react-toastify';

function ProductDetail() {
  const {id} = useParams()
  const [product,setProduct] = useState([])
  const [quantity,setQuantity] = useState(1)
  // const [cart,setCart] = useState([])

  const dispatch = useDispatch()

  const getProduct = ()=>{
    fetch('https://fakestoreapi.com/products/'+id)
    .then(res =>res.json())
    .then(data=>setProduct(data))
  }


  const addQuantity = ()=>{
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const removeQuantity = ()=>{
    if(quantity === 1){
      return ;
    }
    setQuantity(prevQuantity => prevQuantity - 1)
  }

  useEffect(() => {
   getProduct()

  })




  return (
    <div className='container mx-auto '>
      <ToastContainer />

      <div className='md:flex md:mt-0 p-5 lg:w-[80%] mx-auto '>

        <div className='mb-8 md:mb-0 md:ml-0'>
          <img src={product.image} alt={product.title} className='md:w-[100%] w-[65%] lg:w-10/12 ml-20 md:ml-0'/>
        </div>

        <div className='md:ml-10'>
          <p className='font-semibold md:text-4xl  mb-5'>{product.title}</p>
          <p className='my-5'>{product.description}</p>

          <p className='font-semibold text-slate-400 text-3xl'>GHC {product.price }</p>

          <div className='inline-flex border border-gray-500 my-3 rounded-lg'>
            <button className='p-6 border-r-2 border-gray-300' onClick={removeQuantity}><FaMinus/></button>

            <div className='p-6 font-bold text-2xl'>{quantity}</div>

            <button className='p-6 border-l-2 border-gray-300' onClick={addQuantity}><FaPlus/></button>
          </div> <br />

          <button className='bg-purple-800 p-6 text-white' onClick={()=>dispatch(addItemToCart({...product,quantity}))}>Add to Cart</button>

          <div>
            <p className='font-bold text-orange-500 text-2xl my-5'></p>
          </div>
        </div>
      </div>

      <div>
        {/* <p>{product.description}</p> */}
      </div>
    </div>
  )
}

export default ProductDetail