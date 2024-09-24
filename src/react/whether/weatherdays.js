import React from 'react'

const weatherdays = (props) => {
  return (
    <div className='pl-2 py-3 flex  items-center text-sm text-gray-300'>
      <h3 className='w-[4.5rem] sm:w-24'> {props.day}</h3>
      <span className=' w-[35%] flex'>  
        <img src={props.img} alt="" className='flex self-center w-10' />      
      <h3 className='flex self-center py-2'>{props.temp}&#176;</h3>
       </span>
       <p >{props.des}</p>
    </div>
  )
}

export default weatherdays
