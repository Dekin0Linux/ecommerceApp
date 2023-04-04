import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container mx-auto flex justify-center items-center'>
        <div className='bg-white flex shadow-md lg:w-1/2 w-full mx-2 my-5 md:mx-0'>
            <div className='md:w-1/2 py-20 px-10'>
                <p className='font-bold text-3xl md:mb-3'>Sign Up</p>
                <small className='md:mb-3'>Create an account </small>
                <form action="">
                    <input type="text" placeholder='FullName' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded'/>

                    <input type="Email" placeholder='Email' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded'/>

                    <input type="password" placeholder='Password' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded'/>

                    <input type="submit" value={'Create Account'} placeholder='Email' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded bg-purple-800 text-white'/>
                </form>

                <Link to={'/login'}> <small> Already have an account ? Login</small></Link>
            </div>
            <div  className='md:w-1/2 hidden md:block '>
                <img src="https://images.unsplash.com/photo-1594823274242-19036bf455e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='h-full'/>
            </div>
        </div>
        
    </div>
  )
}

export default Login