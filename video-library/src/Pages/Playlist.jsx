import React from "react";
import './playlistpage.css'
import PlaylistCard from "../Components/PlaylistCard";
import SideBar from "../Components/SideBar";

function Playlist() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container all-playlist-container">
       <div className="playlist-box">  
      <PlaylistCard/>
      </div>
      <button className="add-list-btn">+</button>
      </div>
    </div>
  );
}

export default Playlist;
