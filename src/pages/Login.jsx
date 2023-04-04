import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container mx-auto flex justify-center items-center'>
        <div className='bg-white md:flex  shadow-md lg:w-1/2 w-full mx-2 my-5 md:mx-0'>
            <div className='md:w-1/2 py-20 px-10'>
                <p className='font-bold text-3xl md:mb-3'>Login</p>
                <small className='md:mb-3'>Sign in to your account </small>
                <form action="">
                    <input type="email" placeholder='Email' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded'/>

                    <input type="password" placeholder='Password' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded'/>
                    <div className='flex justify-between my-3'>
                        <div>
                            <input type="checkbox" name="rm" id="" className='mr-2'/>Remember me
                        </div>
                        
                        <Link to={'/'}> <small> Forgot Password</small></Link>
                    </div>

                    <input type="submit" value={'Login'} placeholder='Email' className='px-3 my-3 py-1 border border-gray-300 w-[100%] outline-0 rounded bg-purple-800 text-white'/>
                </form>

                <Link to={'/singup'}> <small> Dont have an account? Sign up</small></Link>
            </div>
            <div className='md:w-1/2 hidden md:block '>
                <img src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80" alt="" className='h-full' />
            </div>
        </div>
        
    </div>
  )
}

export default Login