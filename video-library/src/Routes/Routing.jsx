import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/home';
import Explore from '../Pages/Explore';
import CategoryVideos from '../Pages/CategoryVideos';
import SingleVideo from '../Pages/SingleVideo';
import Playlist from '../Pages/Playlist';
import Watchlater from '../Pages/Watchlater';
import SinglePlaylist from '../Pages/singlePlaylist';


function Routing() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/explore' element={<Explore/>} />
      <Route path='/:category' element={<CategoryVideos/>} />
      <Route path='/videos/:singleVideoId' element={<SingleVideo/>} />
      <Route path='/playlist' element={<Playlist/>} />
      <Route path='/videos/watchlater' element={<Watchlater/>} />
      <Route path="/playlist/:singlePlaylistId" element={<SinglePlaylist/>}/>
      
      </Routes>      
    </div>
  )
}

export default Routing
