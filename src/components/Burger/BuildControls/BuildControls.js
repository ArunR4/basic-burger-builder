import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const control = [
    {label:'Salad', type :'salad'},
    {label:'Bacon', type :'bacon'},
    {label:'Cheese', type :'cheese'},
    {label:'Meat', type :'meat'}
];

const BuildControls = props => {
    return <div className={classes.BuildControls}>
            <p>Current Prices : <strong>{props.prices.toFixed(2)}</strong></p>
            {control.map(el=>{
                return <BuildControl 
                        key={el.label}
                        label={el.label}
                        clickedMore = {()=>props.more(el.type)}
                        clickedLess = {()=>props.less(el.type)}     
                        disabled = {props.disabled[el.type]}
                />;
            })}
            <button className={classes.OrderButton}
                    disabled = {!(props.disableBtn)}
                    onClick={props.summary}
            >Order Now</button>
    </div>
}

export default BuildControls;