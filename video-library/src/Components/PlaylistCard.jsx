import React, { useContext } from 'react'
import './playlist.css'
import { useNavigate } from 'react-router-dom'
import { playlistContext } from '../Context/PlaylistProvider'

function PlaylistCard({data}) {

const navigate=useNavigate()

const {handleDelete} = useContext(playlistContext)

  return (
    <div className='playlist-card' >
      <img src="https://picsum.photos/311/174" alt="playlist-card" onClick={()=> navigate(`/playlist/${data.title}`)} />
      <h3>{data.title}</h3>
      <p>description</p>
      <button onClick={()=>handleDelete(data.title)}>Delete</button>
    </div>
  )
}

export default PlaylistCard
