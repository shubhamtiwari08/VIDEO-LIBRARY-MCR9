import React from 'react'
import './categorycard.css'
import { useNavigate } from 'react-router-dom'

function CategoryCard({data}) {
    
     const {thumbnail,_id,category} =  data
     const navigate = useNavigate()

  return (
    <div className='category-card' onClick={()=> navigate(`/${category}`)}>
      <img src={thumbnail} alt={category}/>
      <h3>{category}</h3>      
    </div>
  )
}

export default CategoryCard
