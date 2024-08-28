import React from 'react'
import { useNavigate } from 'react-router'
const Contact = () => {
  const navigate=useNavigate()

  return (
    <div>
      <h1>contact page</h1>
      <button className='bg-blue-400 p-3 rounded-lg ml-10 mt-10' onClick={()=>navigate("/")}>back to home </button>
    </div>
  )
}

export default Contact