import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Homepage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Official Psyche Website</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Learn More</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Credits</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
