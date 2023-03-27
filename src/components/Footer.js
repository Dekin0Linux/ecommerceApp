import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-100'>
        <div className="container mx-auto mt-5 py-5 px-3 flex flex-wrap justify-between gap-y-5">
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
                    <input type="text" placeholder='Enter your email' className='border-2 border-gray-300 md:w-64 md:py-2 px-1 outline-none'/><input type="submit" className='bg-green-600 md:py-2 md:px-2 px-0.5 text-white' value='Subscribe'/>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Footer