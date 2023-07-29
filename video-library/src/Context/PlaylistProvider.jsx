import React, { createContext, useContext, useState } from 'react'
import { videoContext } from './VideoProvider'

export const playlistContext = createContext()





function PlaylistProvider({children}) {
    const [createToggle,setCreateToggle] = useState(false)
    const [playlist, setPlaylist] = useState([{title:"new songs",description:"2023"}])

     const{videoState,videoDispatch} = useContext(videoContext)

    const handleAdd =(vTitle,data)=>{
        const updatedData = videoState.video.map((vid)=>{
            if(vid._id === data._id ){
                return({...vid,vTitle})
            }
        })
          videoDispatch({type:"ADD_TO_PLAYLIST",payload:updatedData})
          setCreateToggle(false)
    }

    const handleDelete = (vtitle)=>{
       setPlaylist(playlist.filter(({title})=> title !== vtitle))
    }


    const handleRemove = (data,vTitle)=>{
             const updatedData = videoState.video.map((vid)=>{
                if(vid?.vTitle === vTitle ){
                    return({...vid,vTitle:""})
                }
        })
        videoDispatch({type:"REMOVE_FROM_PLAYLIST",payload:updatedData})
          setCreateToggle(false)
    } 




    

  return (
    <playlistContext.Provider value={{handleRemove,handleAdd,playlist,handleDelete,setPlaylist,createToggle,setCreateToggle}}>{children}</playlistContext.Provider>
  )

  
}

export default PlaylistProvider
