import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT <span className='text-gray-500 font-medium'>US</span></p>
      </div>
    
        <div className='my-10 flex flex-col md:flex-row gap-12'>
       <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to Prescripto, your reliable partner in transforming the way you manage your healthcare. We believe that access to quality healthcare should be simple, fast, and stress-free.</p>
        <p>Our platform is designed to connect patients with trusted doctors, making it easier than ever to schedule appointments, consult with specialists, and keep track of your health records—all in one place.</p>
        <b className='text-gray-800'>Our vision</b>
        <p>Our mission is simple—to make healthcare accessible, efficient, and patient-centered. We strive to remove barriers in healthcare by providing an easy-to-use platform where patients can find top doctors, book appointments instantly, and access quality care without hassle.</p>
       </div>
    </div>

<div className='text-xl my-4'>
  <p>Why <span className='text-gray-600 font-semibold'>Choose Us</span> </p>
</div>
<div className='flex flex-col md:flex-row mb-20'>

  <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
<b>Efficiency:</b>
<p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Convenience</b>
<p>Access to a network of trusted healthcare professionals in your area.</p>

  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Personalisation</b>
<p>Tailored recommenation and reminders to help you stay on top of your health.</p>

  </div>
</div>

</div>

  )
}

export default About
