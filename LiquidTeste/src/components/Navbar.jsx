import React from "react";
import './Navbar.css'; // Importa o arquivo CSS

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          React Bootsbook
        </a>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              placeholder="Search"
            />
            <button className="btn btn-outline-primary" type="button" id="button-addon2">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </nav>
    </>
  );
}
