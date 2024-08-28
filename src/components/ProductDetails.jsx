import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
const ProductDetails = () => {
  const params = useParams()
  console.log(params.id)
  const navigate = useNavigate()
  return (
    <div>
      <h1>product id {params.id}</h1>
      <button className='bg-blue-400 p-3 rounded-lg ml-10 mt-10' onClick={()=>navigate("/")}>back to home </button>
    </div>
    
  )
}

export default ProductDetails