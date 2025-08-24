import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact 
         <span className='text-gray-600 font-semibold'> us</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our office</p>
          <p className='text-gray-500'>New delhi</p>
          <p className='text-gray-500'>+91-7483756333</p>
          <p className='text-gray-500'>Email:</p>
          <p className='font-semibold text-lg text-gray-600'>Careers</p>
          <p className='text-gray-500'>Learn more about us</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
