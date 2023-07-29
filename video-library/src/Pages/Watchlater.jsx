import React, { useContext } from 'react'
import SideBar from '../Components/SideBar'
import { videos } from '../DATA/videos'
import { videoContext } from '../Context/VideoProvider'
import VideoCard from '../Components/VideoCard'

function Watchlater() {

    const {videoState,videoDispatch} = useContext(videoContext)

    const watchLaterVideos = videoState.watchLater

  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container">
       <h2>Watch Later</h2>
       <div className="category-boxes">
         {watchLaterVideos.map((data)=> <VideoCard data={data}/>)} 
       </div>
         
      </div>
    </div>
  )
}

export default Watchlater
