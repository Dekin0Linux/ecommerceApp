import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-100'>
        <div className="container mx-auto mt-5 md:py-5 md:flex justify-between">
            <div>
                <p className='font-semibold md:text-3xl md:mb-5'>Products</p>
                <p>Offers</p>
                <p>Testimonial</p>
                <p>Event</p>
                <p>About Us</p>
                <p>About Us</p>
            </div>
            <div>
                <p className='font-semibold md:text-3xl md:mb-5'>Contact</p>
                <p>Offers</p>
                <p>Testimonial</p>
                <p>Event</p>
                <p>About Us</p>
                <p>About Us</p>
            </div>
            <div>
                <p className='font-semibold md:text-3xl md:mb-5'>Partners</p>
                <p>Offers</p>
                <p>Testimonial</p>
                <p>Event</p>
                <p>About Us</p>
                <p>About Us</p>
            </div>
            <div>
                <p className='font-semibold md:text-3xl md:mb-5'>Newsletter</p>
                <form action="">
                    <input type="text" placeholder='Enter your email' className='border-2 border-gray-300 w-64 py-2 px-1 outline-none'/><input type="submit" className='bg-green-600 py-2 px-2 text-white' value='Subscribe'/>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Footer