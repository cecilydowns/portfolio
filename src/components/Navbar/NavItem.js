import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.scss';


const NavItem = (props) => {
    return (
            <NavLink
            exact
            to={props.to}
            activeClassName={styles.selected}
            >
               <div className={styles.navitem}>
                    <div className={styles.navimage}>
                        <img src={props.icon} />
                    </div>
                    <div className={styles.navtext}>
                        {props.name}
                    </div>
              </div>
            </NavLink>
            );
}

export default NavItem;
