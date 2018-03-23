import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import NavItem from './NavItem';
import PortfolioIcon from './portfolio.svg';
import AboutIcon from './about.svg';
import MailIcon from './mail.svg'

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">

        <h1>
          <NavLink to="/">Cecily Downs</NavLink>
        </h1>

        <div className='middle'>
          
        </div>

        <NavItem to="/portfolio" name="Portfolio" icon={PortfolioIcon} />
        <NavItem to="/about" name="About" icon={AboutIcon} />
        <NavItem to="/contact" name="Contact" icon={MailIcon} />

      </div>
    );
  }
}

export default Navbar;
