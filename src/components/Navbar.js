import React, { useState } from 'react'
import {FaRegHeart,FaShoppingCart,FaUserAlt} from 'react-icons/fa'
import { useSelector,useDispatch} from 'react-redux'
import { searchName } from '../store/cartReducer'
import { Link } from 'react-router-dom'

function Navbar() {
    const cart = useSelector(state=> state.cart.value)
    const [search,setSearch] = useState('')
    const dispatch= useDispatch()

    const handleSearch=(e)=>{
        e.preventDefault();
        
            setSearch(e.target.value)

            dispatch(searchName(search))
    }


  return (
    <div className='bg-white py-5 px-3 mb-5 shadow-lg'>

        <div className='md:flex items-center gap-x-3 container mx-auto  justify-center '>
            <Link to={'/'} className='md:w-10 w-5'>
                <img src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" alt="" className='w-10 md:w-90'/>
            </Link>

            <form className=' md:mx-20 border border-gray-500 w-[80%]   my-3 md:my-0'>
                <input type="search" onChange={handleSearch} className='py-1 px-3 lg:w-[100%] w-[80%] outline-0'  placeholder='Search for products'/>
                {/* <input type="submit" value="Search" className='bg-green-800 text-white py-1 w-[20%] '/> */}
            </form>

            <div className='flex gap-x-5'>
                <FaRegHeart size={25}/>
                <Link to={'/cart'} className='relative '>
                    <FaShoppingCart size={25}/>
                    <div  className='absolute top-[-6px] right-[-5px] bg-green-800 w-5 h-5 rounded-3xl text-center text-white flex justify-center items-center text-sm'>{cart.length}</div>
                </Link>
                <Link to={'/Login'}><FaUserAlt size={25} /></Link>
            </div>

        </div>

    </div>
  )
}

export default Navbar