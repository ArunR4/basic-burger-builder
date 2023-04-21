import React from "react";

import classes from './BuildControl.css';

const BuildControl = props =>(
    <div className={classes.BuildControl} >
        <div className={classes.Label} >{props.label}</div>
        <button className={classes.Less} onClick={props.clickedLess} disabled={props.disabled}>less</button>
        <button className={classes.More} onClick={props.clickedMore}>more</button>
    </div>
)


export default BuildControl;