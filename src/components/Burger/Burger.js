import React from "react";

import classes from './Burger.css';
import Ingrediants from './Ingrediants/Ingrediants';

const Burger = props =>{
    let objToFun = Object.keys(props.ingrediant).map(ikey=>{
        return [...Array(props.ingrediant[ikey])].map( ( _,i ) => {
            return <Ingrediants  key={ikey + i} type={ikey} />;
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if(objToFun.length === 0){objToFun=<p>Please Add Some Ingredients</p>;}

    return(
        <div className={classes.Burger}>
            <Ingrediants type='bread-top' />
            {objToFun}
            <Ingrediants type='bread-bottom' />
        </div>
    );
};

export default Burger;