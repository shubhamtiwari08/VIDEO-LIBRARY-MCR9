import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <NavLink to="/" acitveClassName="active-link">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/explore"  acitveClassName="active-link">Explore </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/playlist"  acitveClassName="active-link">Playlist</NavLink>
        </li>
        <li>
          <NavLink to="/videos/watchlater"  acitveClassName="active-link">Watch Later</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
