import React, { useContext, useState } from "react";
import './playlistpage.css'
import PlaylistCard from "../Components/PlaylistCard";
import SideBar from "../Components/SideBar";
import { playlistContext } from "../Context/PlaylistProvider";
import CreatePlaylist from "../Components/createPlaylist";

function Playlist() {
    const {playlist,setPlaylist,createToggle,setCreateToggle,handleDelete} = useContext(playlistContext)
   

  return (
    <div className="home-container">
      <SideBar />
      <div className="categories-container all-playlist-container">
       <div className="playlist-box">  
      {playlist.map(item=><PlaylistCard data={item} />)}
      </div>
      <button className="add-list-btn" onClick={()=> setCreateToggle(true)}>+</button>
      {createToggle&&<div className="add-playlist">
         <CreatePlaylist/>
      </div>}
      </div>
    </div>
  );
}

export default Playlist;
