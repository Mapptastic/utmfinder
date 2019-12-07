import React from 'react';
import logo from '../../assets/img/mapptastic-logo.png'
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src={logo} alt="Mapptastic UTM finder: Free and open source UTM zone finder"/>
          MAPPTASTIC
        </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
    </nav>
    );
  }
                                             
export default Navbar;