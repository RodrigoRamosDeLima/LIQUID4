import React from "react";

import './Feed.css'; // Importa o arquivo CSS

export default function Feed() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <img
              className="profile-img"
              src="https://picsum.photos/50/50"
              alt=""
            />
            <div className="user-info">
              <div className="username">@LeeCross</div>
              <div className="full-name">Miracles Lee Cross</div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-toggle">
              <i className="fa fa-ellipsis-h"></i>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item">Save</div>
              <div className="dropdown-item">Hide</div>
              <div className="dropdown-item">Report</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="time">
            <i className="fa fa-clock-o"></i> 10 min ago
          </div>
          <a href="#">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet, consectetur adip.
            </h5>
          </a>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div className="card-footer">
          <a href="#">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#">
            <i className="fa fa-mail-forward"></i> Share
          </a>
        </div>
      </div>
    </>
  );
}
