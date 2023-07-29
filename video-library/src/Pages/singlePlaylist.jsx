import React, { useContext } from 'react'
import SideBar from '../Components/SideBar'
import { videoContext } from '../Context/VideoProvider'
import VideoCard from '../Components/VideoCard'
import { useParams } from 'react-router-dom'

function SinglePlaylist() {


    const {videoState} = useContext(videoContext)
    const {singlePlaylistId} = useParams()

    const list = videoState.video.filter((video)=> video?.vTitle === singlePlaylistId)


  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container all-playlist-container">
      <h3>{singlePlaylistId}</h3>
       <div className="playlist-box">  
        {list.map((data)=> <VideoCard data={data}/>)}
    
      </div>
    </div>
</div>
  )
}

export default SinglePlaylist
