import React, {Component} from "react";

import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummery/OrderSummery";


    const PRICES = {
        salad : 0.5,
        cheese : 4,
        meat : 1.3,
        bacon : 0.7
    }

class BugerBuilder extends Component {


    state = {
        ingrediant:{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        purchable : false,
        totalPrice : 4,
        purchasing : false
    }

    addIngrediantsHandler = type =>{
        //for ingredients
        const oldCount = this.state.ingrediant[type];
        const updatedCount = oldCount + 1;
        const ingrediantForUpdate = {...this.state.ingrediant}
        ingrediantForUpdate[type] = updatedCount;

        //for prices
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PRICES[type];
        
        this.setState({ingrediant : ingrediantForUpdate, totalPrice : newPrice});
        this.disableBtnHandler(ingrediantForUpdate);
    } 

    removeIngrediantsHandler = type =>{
        //for ingredients
        
        const oldCount = this.state.ingrediant[type];
        if(oldCount <=0 ){return null;}
        const updatedCount = oldCount - 1;
        const ingrediantForUpdate = {...this.state.ingrediant}
        ingrediantForUpdate[type] = updatedCount;

        //for prices
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICES[type];
        
        this.setState({ingrediant : ingrediantForUpdate, totalPrice : newPrice});
        this.disableBtnHandler(ingrediantForUpdate);
        
    }

    disableBtnHandler = (ingrediantForUpdate) =>{
        //for the Order Now button Disable
        const sum = Object.keys(ingrediantForUpdate).map(igkey =>{
            return ingrediantForUpdate[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchable: sum>0})
    }

    purchasingHandler =()=>{
        this.setState({purchasing:true});
    }

    closeBackDropHandler = () =>{
        this.setState({purchasing:false});
    }

    continueBtnHandler = () =>{
        alert("You continue !!")
    }

    render(){
        const disabledIngrediants = {...this.state.ingrediant}
        for (let i in disabledIngrediants){
            disabledIngrediants[i] = disabledIngrediants[i] <= 0;
        }

        

        return(
            <Aux>
                <Model show={this.state.purchasing} modelClosed={this.closeBackDropHandler}>
                    <OrderSummary 
                    ingrediants={this.state.ingrediant} 
                    continue={this.continueBtnHandler}
                    close={this.closeBackDropHandler}
                    prices={this.state.totalPrice}/>
                </Model>
                <Burger  ingrediant={this.state.ingrediant}/>
                <BuildControls 
                more = {this.addIngrediantsHandler} 
                less = {this.removeIngrediantsHandler}
                disabled = {disabledIngrediants}
                disableBtn={this.state.purchable}
                prices = {this.state.totalPrice}
                summary={this.purchasingHandler}
                />
            </Aux>
        );
    };
}

export default BugerBuilder;