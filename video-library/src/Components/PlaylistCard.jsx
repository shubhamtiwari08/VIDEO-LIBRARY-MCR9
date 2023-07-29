import React from 'react'
import './playlist.css'

function PlaylistCard({data}) {

  return (
    <div className='playlist-card'>
      <img src="https://picsum.photos/311/174" alt="playlist-card" />
      <h3>{data.title}</h3>
      <p>description</p>
      <button>Delete</button>
    </div>
  )
}

export default PlaylistCard
