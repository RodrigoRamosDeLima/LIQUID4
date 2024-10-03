import React from "react";
import Feed from "./Feed";
import './Maincontent.css'; // Importa o arquivo CSS

export default function Maincontent() {
  return (
    <>
      <div className="main-content">
        <div className="main-card">
          <div className="main-card-header">
            <ul className="nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" id="posts-tab" href="#posts" role="tab">
                  Make a publication
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="images-tab" href="#images" role="tab">
                  Images
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane active" id="posts" role="tabpanel">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                  ></textarea>
                </div>
              </div>
              <div className="tab-pane" id="images" role="tabpanel">
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Upload image
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button type="submit" className="btn">
                  Share
                </button>
              </div>
              <div className="btn-group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn-link dropdown-toggle"
                >
                  <i className="fa fa-globe"></i>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-globe"></i> Public
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-users"></i> Friends
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user"></i> Just me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </>
  );
}
