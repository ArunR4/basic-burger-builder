import React from "react";

import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigatonItems";

const Toolbar = props =>(
    <header className={classes.Toolbar}>
        <div onClick={props.clicked} className={classes.mobileOnly }>MENU</div>
        <div><Logo /></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar; 