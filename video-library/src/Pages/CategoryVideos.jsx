import React from "react";
import SideBar from "../Components/SideBar";
import { useParams } from "react-router-dom";
import { videos } from "../DATA/videos";
import VideoCard from "../Components/VideoCard";

function CategoryVideos() {

    const {category} = useParams()
    const categoryVideo = videos.filter(video=>video.category === category)

  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container">
       <h2>{category}</h2>
       <div className="category-boxes">
       {categoryVideo.map((data)=> <VideoCard data={data}/>)}
       </div>
         
      </div>
    </div>
  );
}

export default CategoryVideos;
