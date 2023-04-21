import React from "react";

import LogoImg from '../../assets/Images/Burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={LogoImg} alt="alt"/>
    </div>
);

export default Logo;