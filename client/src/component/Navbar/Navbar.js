import React from 'react';
import {Link} from 'react-router-dom';

function Navbar (){

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" >Parking App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
          
            </li>
            
            <li className="nav-item dropdown">
              <a id="settingsID" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Settings
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item"><Link>Edit Profile</Link></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item"><Link to="/dashboard">Return Home</Link></a>
              </div>
            </li>
            
          </ul>
         
        </div>
      </nav>
    )
}

export default Navbar;