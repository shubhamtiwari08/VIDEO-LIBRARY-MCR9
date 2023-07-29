import React, { createContext, useState } from 'react'

export const playlistContext = createContext()



function PlaylistProvider({children}) {
    const [createToggle,setCreateToggle] = useState(false)
    const [playlist, setPlaylist] = useState([{title:"new songs",description:"2023"}])
  return (
    <playlistContext.Provider value={{playlist,setPlaylist,createToggle,setCreateToggle}}>{children}</playlistContext.Provider>
  )

  
}

export default PlaylistProvider
