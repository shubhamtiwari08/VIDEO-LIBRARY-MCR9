import React, { useContext, useState } from "react";
import "./singleVideo.css";
import SideBar from "../Components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { faClock, faClockFour, faHome, faListAlt, faNoteSticky, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router-dom";
import { videos } from "../DATA/videos";
import { videoContext } from "../Context/VideoProvider";
import VideoCard from "../Components/VideoCard";
import AddNote from "../Components/AddNote";

function SingleVideo() {

    
    const {noteToggle,setNoteToggle,notes,videoState,finalNote,setFinalNote,videoDispatch,videoData} = useContext(videoContext)
    const {singleVideoId} = useParams()
    

    const singleVideoData = videos.find(({_id})=> Number(_id) === Number(singleVideoId) )

    const {title,views,chips,thumbnail,src,category,creator,_id} = singleVideoData

   const watchLatervideos = videoState.watchLater


  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container">
        <div className="single-video-container">
          <div className="main-video-box">
            <div className="ratio ratio-16x9">
              <iframe
                src={src}
                title={title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-desc-container">
             <h4>{title}</h4>
             <div className="video-btns">
             { videoState.watchLater.find((video)=> video._id === _id)?(
          <button
            className="watch-later-btn-singlepage"
            style={{backgroundColor:"black"}}
            onClick={() =>
              videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: singleVideoData })
            }
          >
            <FontAwesomeIcon icon={faClockFour} color="lightgreen" />
          </button>
        ):(
          <button
            className="watch-later-btn-singlepage"
            style={{backgroundColor:"white"}}
            onClick={() =>
              videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: singleVideoData })
            }
          >
            <FontAwesomeIcon icon={faClockFour} color="black"/>
          </button>
        ) }
             <FontAwesomeIcon icon={faListAlt} style={{ color: 'black' }} />
             <div className="pop-up">{noteToggle&&<div className="add-note-pop"><AddNote/></div>}</div>
             <div className="addnotebtn" onClick={()=>setNoteToggle(!noteToggle)}>
             <FontAwesomeIcon icon={faNoteSticky} style={{ color: 'black' }} />
             </div>
             </div>
            </div>
            <div className="notes-box">
              <h3>my notes</h3>
              {finalNote.map(data=><div className="notes-container"><p>{data}</p><button>delete</button></div>)}
            </div>
          </div>
          <div className="suggestion-box">
          {videoData.map((data)=> <VideoCard data={data}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleVideo;
