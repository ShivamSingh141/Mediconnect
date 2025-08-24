import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userdat,setuserdata]=useState({
    name:"shivam",
    image:assets.profile_pic,
    email:'shivam@2004',
    phone:'+91 646663',
    address:{
      line1:"new delhi",
      line2:"cp"
    },
    gender:'Male',
    dob:'2000-01-20'

  })
const [isedit,setisedit]=useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userdat.image} alt="" />
      {
        isedit
        ?<input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userdat.name} onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))}/>
        :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userdat.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userdat.email}</p>
          <p className='font-medium'>Phone:</p>
            {
        isedit
        ?<input className='bg-gray-100 max-w-52' type="text" value={userdat.phone} onChange={e=>setuserdata(prev=>({...prev,phone:e.target.value}))}/>
        :<p className='text-blue-400'>{userdat.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isedit
        ?<p>
          <input className='bg-gray-50' onChange={(e)=> setuserdata(prev=>({ ...prev, address:{...prev.address,line1:e.target.value}}))} value={userdat.address.line1} type="text" />
          <br />
          <input className='bg-gray-50' onChange={(e)=> setuserdata(prev=>({ ...prev, address:{...prev.address,line2:e.target.value}}))} value={userdat.address.line2} type="text" />
        </p>
        :<p className='text-gray-500'>
          {userdat.address.line1}
          <br />
          {userdat.address.line2}
        </p>
      }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3' >Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
           {
        isedit
        ?<select className='max-w-20 bg-gray-100' onChange={(e)=>setuserdata(prev=>({...prev,gender:e.target.value}))} value={userdat.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        :<p className='text-gray-400'>{userdat.gender}</p>
           }
           <p className='font-medium'>Birthday: </p>
           {
            isedit
            ? <input className='max-w-28 bg-gray-100' type="date"onChange={(e)=>setuserdata(prev=>({...prev,dob:e.target.value}))} value={userdat.dob}/>
            : <p className='text-gray-400'>{userdat.dob}</p>
           }
        </div>
      </div>
      <div className='mt-10'>
        {
          isedit
          ?<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setisedit(false)}>Save Information</button>
           : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setisedit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
