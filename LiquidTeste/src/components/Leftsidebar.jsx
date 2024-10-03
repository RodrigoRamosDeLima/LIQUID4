import React from "react";
import './Leftsidebar.css'; // Importa o arquivo CSS

export default function Leftsidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-card">
          <div className="sidebar-card-body">
            <div className="username">@LeeCross</div>
            <div className="fullname">Fullname : Miracles Lee Cross</div>
            <div className="description">
              Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="text-muted">Followers</div>
              <div className="number">5.2342</div>
            </li>
            <li className="list-group-item">
              <div className="text-muted">Following</div>
              <div className="number">6758</div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </>
  );
}
