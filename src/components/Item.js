import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Item({item}) {
  return (
    <Link to={`/productdetails/${item.id}`} className='hover:shadow-lg p-5 md:w-[30%] lg:w-1/6 w-[45%] md:h-auto relative md:my-10' key={item.id}>
        <img src={item.image} alt={item.id} className='md:w-50 md:h-48'/>
        <div className='mt-5'>
            <p className='font-bold'>{item.title}</p>
            <small>{item.category}</small>
            <p className='text-purple-600 font-semibold text-lg'>GHC {item.price}</p>
            <button className='bg-green-500 absolute top-2 right-2 p-2 rounded-lg'><FaShoppingCart size={18} color={'white'}/></button>
        </div>
    </Link>
  )
}

export default Item