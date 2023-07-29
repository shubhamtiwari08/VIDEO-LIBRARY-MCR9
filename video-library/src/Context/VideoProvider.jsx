import React, { createContext, useReducer, useState } from "react";
import { videos } from "../DATA/videos";
import { videoReducer } from "../Reducer/videoReducer";

export const videoContext = createContext();

function VideoProvider({ children }) {
  const videoData = videos;
  const [notes,setNotes] = useState([])
  const [finalNote,setFinalNote] = useState([])
  const [noteToggle,setNoteToggle] = useState(false)

  
  

  const [videoState, videoDispatch] = useReducer(videoReducer, {
    watchLater: [],
    video:videoData
  });

  return (
    <videoContext.Provider value={{noteToggle,setNoteToggle,finalNote,setFinalNote, videoData,notes,setNotes, videoState, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
}

export default VideoProvider;
