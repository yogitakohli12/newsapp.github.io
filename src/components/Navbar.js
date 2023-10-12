import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg " id='nav'>
        <div className="container-fluid">
          <Link className="navbar-brand" id='logo' to="#">Top-TodaY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/business">Business</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/general">General</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/health">Health</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/science">Science</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            US NEWS
              </Link>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/us/allnews">ALL NEWS</Link></li>
           
            
            
           </ul>
           </li>
              
            </ul>
            
            {/*<form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
          </div>
        </div>
      </nav>
    )
  }
}
