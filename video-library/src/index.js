import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import VideoProvider from './Context/VideoProvider';
import PlaylistProvider from './Context/PlaylistProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <VideoProvider>
  <PlaylistProvider>

  
    <App />
  
  </PlaylistProvider>
  </VideoProvider>
  </BrowserRouter>
)