import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
const {docId}=useParams()
const {doctors,currencySymbol}=useContext(AppContext)
const daysofweek =['SUN','MON','TUE','WED','THU','FRI','SAT']


const [docInfo,setdocInfo]=useState(null)

// state variables for slot and timings
const [docslots,setdocslots]=useState([])
const [slotindex,setslotindex]=useState(0)
const [slottime,setslottime]=useState('')



const fetchdocinfo=async()=>{
  const docInfo=doctors.find(doc=>doc._id===docId)
  setdocInfo(docInfo)
 
}

const getavailabeslots=async()=>{
  setdocslots([])

  // getting currentdat
  let today=new Date()
  for(let i=0;i<7;i++){
    // getting date with index
    let currentdate=new Date(today)
    currentdate.setDate(today.getDate()+i)

    // end time of the daaet with index
    let endTime=new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)

//setting hours
if(today.getDate()===currentdate.getDate()){
  currentdate.setHours(currentdate.getHours()>10?currentdate.getHours()+1:10)
  currentdate.setMinutes(currentdate.getMinutes()>30?30:0)
}
else{
  currentdate.setHours(10)
  currentdate.setMinutes(0)


}


let timeslots=[]
while(currentdate<endTime){
  let formattedtime=currentdate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

  timeslots.push({
    datetime:new Date(currentdate),
    time:formattedtime
  })
//inc curr time by 30 minute
currentdate.setMinutes(currentdate.getMinutes()+30)

}
setdocslots(prev=>([...prev,timeslots]))

  }

}

useEffect(()=>{
  fetchdocinfo()
},[doctors,docId])

useEffect(()=>{
  getavailabeslots()

},[docInfo])


useEffect(()=>{
console.log(docslots)}
,[docslots])

  return docInfo && (
    <div>
      {/* doctors details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* doc info:name,degree,experience.. */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*about doctor  */}
          <div>
            <p className='flex itms-center gap-1 text-sm font-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /> </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
   {/* booking slots */}
   <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
    <p>Booking slots</p>
    <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
      {
        docslots.length && docslots.map((item,index)=>(
          <div onClick={()=>setslotindex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex===index?'bg-primary text-white':'border border-gray-200'}`} key={index}>
            <p>{item[0]&&daysofweek[item[0].datetime.getDay()]}</p>
            <p>{item[0]&&item[0].datetime.getDate()}</p>
   
            </div>

        ))
      }
    </div>
    <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
      {docslots.length && docslots[slotindex].map((item,index)=>(
          <p onClick={()=>setslottime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time ===slottime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}

          </p>
))}
    </div>
<button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>

   </div>
   {/* listing related doctors */}
   <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
