import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
           <div className={classes.brandName}>
            Covid-Pidea
           </div>
        </div>
    );
}

export default Navbar;