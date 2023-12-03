import React from 'react'
// import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

//text-center p-5 md:w-[30%] lg:w-1/6 w-[45%] md:h-auto relative md:my-10 bg-white


function Item({item}) {
  return (
    <Link to={`/productdetails/${item.id}`} className='shadow-md rounded-lg w-[45%] md:w-auto' key={item.id}>
        <div className='bg-white md:w-40'>
          <div className='bg-white'>
            <img src={item.image} alt={item.id} className='object-contain w-40 h-40'/>
          </div>
          
          <div className='p-2'>
              <p className='font-bold truncate'>{item.title.slice(0,20)}...</p>
              <small className='capitalize'>{item.category}</small>
              <p className='text-purple-600 font-semibold text-lg'>GHC {item.price}</p>
          </div>
        </div>
        
    </Link>
  )
}

export default Item