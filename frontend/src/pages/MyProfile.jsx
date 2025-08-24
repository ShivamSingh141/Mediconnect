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
    <div>
      <img src={userdat.image} alt="" />
      {
        isedit
        ?<input type="text" value={userdat.name} onChange={e=>setuserdata(prev=>({...prev,name:e.target.value}))}/>
        :<p>{userdat.name}</p>
      }
      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id:</p>
          <p>{userdat.email}</p>
          <p>Phone:</p>
            {
        isedit
        ?<input type="text" value={userdat.phone} onChange={e=>setuserdata(prev=>({...prev,phone:e.target.value}))}/>
        :<p>{userdat.phone}</p>
      }
      <p>Address:</p>
      {
        isedit
        ?<p>
          <input onChange={(e)=> setuserdata(prev=>({ ...prev, address:{...prev.address,line1:e.target.value}}))} value={userdat.address.line1} type="text" />
          <br />
          <input onChange={(e)=> setuserdata(prev=>({ ...prev, address:{...prev.address,line2:e.target.value}}))} value={userdat.address.line2} type="text" />
        </p>
        :<p>
          {userdat.address.line1}
          <br />
          {userdat.address.line2}
        </p>
      }
        </div>
      </div>
      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender:</p>
           {
        isedit
        ?<select onChange={(e)=>setuserdata(prev=>({...prev,gender:e.target.value}))} value={userdat.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        :<p>{userdat.gender}</p>
           }
           <p>Birthday: </p>
           {
            isedit
            ? <input type="date"onChange={(e)=>setuserdata(prev=>({...prev,dob:e.target.value}))} value={userdat.dob}/>
            : <p>{userdat.dob}</p>
           }
        </div>
      </div>

    </div>
  )
}

export default MyProfile
