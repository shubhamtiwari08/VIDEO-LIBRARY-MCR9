import React, { useContext, useState } from 'react'
import './other.css'
import { playlistContext } from '../Context/PlaylistProvider'







function CreatePlaylist({data}) {

    const {createToggle,setCreateToggle,playlist,setPlaylist} = useContext(playlistContext)
    const {handleAdd} = useContext(playlistContext)
    const [title,setTittle] = useState("")

    const handleInput=(e)=>{
       const name = e.target.name
       const value = e.target.value
       setTittle({...title,[name]:value})
    }

    const handleCreate = ()=>{
        
        setPlaylist([...playlist,title])
        setCreateToggle(false)

    }

    


  return (
    <div className='create-playlist'>
      <h3>add to playlist</h3>
      <input name='title' type="text" placeholder='title'  onChange={handleInput}/>
      <input name="description" type="text" placeholder='title'  onChange={handleInput}/>
      <button onClick={handleCreate}>Create New playlist</button>
      {playlist.map(({title})=> <p onClick={()=>handleAdd(title,data)}>{title}<hr/></p>)}
    </div>

  )
}

export default CreatePlaylist
