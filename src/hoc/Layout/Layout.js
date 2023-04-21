import React, { Component } from "react";

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }

    toggleHandler = () => {
        this.setState((prevstate)=>{
           return {showSideDrawer:!prevstate.showSideDrawer};
        });
    }

    render(){
    return(
        <Aux>
        <Toolbar clicked={this.toggleHandler}/>
        <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
        <main className={classes.content}>
            {this.props.children}
        </main>
        </Aux>
    );
}}

export default Layout;