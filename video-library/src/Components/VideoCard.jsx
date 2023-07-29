import React, { useContext } from "react";
import "./videocard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { videoContext } from "../Context/VideoProvider";

function VideoCard({ data }) {
  const { videoState, videoDispatch } = useContext(videoContext);
  const { title, views, chips, thumbnail, src, category, creator, _id } = data;
  const navigate = useNavigate();

  console.log(videoState.watchLater.filter(({_id})=> _id === 1))

  console.log(videoState.watchLater)

  return (
    <div className="video-card-box">
      <div className="img-box" onClick={() => navigate(`/videos/${_id}`)}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className="content-container">
        <div className="profile">
          <img src="https://picsum.photos/300/174" alt="profile" />
        </div>
        <div
          className="text-content"
          onClick={() => navigate(`/videos/${_id}`)}
        >
          <h5>{title}</h5>
          <p>
            {views} views | {creator}
          </p>
        </div>
        { videoState.watchLater.find((video)=> video._id === _id)?  (
          <button
            className="watch-later-btn"
            style={{backgroundColor:"black"}}
            onClick={() =>
              videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: data })
            }
          >
            <FontAwesomeIcon icon={faClockFour} color="lightgreen" />
          </button>
        ):(
          <button
            className="watch-later-btn"
            style={{backgroundColor:"white"}}
            onClick={() =>
              videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: data })
            }
          >
            <FontAwesomeIcon icon={faClockFour} color="black"/>
          </button>
        ) }
      </div>
    </div>
  );
}

export default VideoCard;
