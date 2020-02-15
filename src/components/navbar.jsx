import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, handleChange }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        meme.fathan
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to="" className="nav-link">
            <li className="nav-item active text-white">
              Discover<span className="sr-only">(current)</span>
            </li>
          </Link>
          <Link to="/saved" className="nav-link">
            <li className="nav-item text-white">Saved Memes</li>
          </Link>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
