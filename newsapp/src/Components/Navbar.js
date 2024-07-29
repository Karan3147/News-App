import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg  bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-danger" to="/">Monkeynews</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link text-white " to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white " to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/health">Health</Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     
      </div>
    </div>
  )
}

export default Navbar
