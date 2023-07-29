import React from 'react'
import './home.css'
import { categories } from '../DATA/categories'
import CategoryCard from '../Components/CategoryCard'
import SideBar from '../Components/SideBar'

function Home() {
  return (
    <div className='home-container'>
         <SideBar/> 
       <div className="categories-container">
         <h2>categories</h2>
         <div className="category-boxes">
         {categories.map((data)=> <CategoryCard data={data}/>) }
         </div>
       </div>
    </div>
  )
}

export default Home
