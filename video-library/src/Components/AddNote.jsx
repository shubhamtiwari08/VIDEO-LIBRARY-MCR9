import React, { useContext } from 'react'
import { videoContext } from '../Context/VideoProvider'

function AddNote() {

    const {noteToggle,setNoteToggle,finalNote,setFinalNote,notes,setNotes} = useContext(videoContext) 

    const handlenote = ()=>{
        setFinalNote([...finalNote,notes])
        setNoteToggle(false)
    }


  return (
    <div style={{display:"flex", flexDirection:"column",padding:"1rem",height:"10rem",gap:"1rem"}}>
      <input type='text' onChange={(e)=>setNotes(e.target.value) } />         
      <button className='button' onClick={handlenote} >add note</button>
    </div>
  )
}

export default AddNote
