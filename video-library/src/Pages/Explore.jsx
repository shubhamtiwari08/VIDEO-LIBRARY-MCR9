import React, { useState } from "react";
import VideoCard from "../Components/VideoCard";
import { videos } from "../DATA/videos";
import SideBar from "../Components/SideBar";
import './Explore.css'

function Explore() {
    const [input,setInput]= useState("")

    const inputText = (e)=>{
       setInput(e.target.value)
    }

    const searchFiltered = videos.filter(({title})=> title.toLowerCase().includes(input.toLowerCase()))

  return (
    <div className="home-container">
      <SideBar/>
      <div className="categories-container">
        <input type="text" placeholder="search videos" onChange={inputText} />
        <div className="all-videos-container">
          {searchFiltered.map((data) => (
            <VideoCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
