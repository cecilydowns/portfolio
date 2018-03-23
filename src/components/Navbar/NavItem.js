import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
            <NavLink
            exact
            to={props.to}
            activeClassName="selected"
            >
               <div className="navitem">
                    <div className="navimage">
                        <img src={props.icon} />
                    </div>
                    <div className="navtext">
                        {props.name}
                    </div>
              </div>
            </NavLink>
            );
}

export default NavItem;
