import React from 'react'
import './playlist.css'
import { useNavigate } from 'react-router-dom'

function PlaylistCard({data}) {

const navigate=useNavigate()


  return (
    <div className='playlist-card' onClick={()=> navigate(`/playlist/${data.title}`)}>
      <img src="https://picsum.photos/311/174" alt="playlist-card" />
      <h3>{data.title}</h3>
      <p>description</p>
      <button>Delete</button>
    </div>
  )
}

export default PlaylistCard
