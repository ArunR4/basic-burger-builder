import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
    const ingrediantSummary = Object.keys(props.ingrediants)
    .map(igkey=>{
        return <li key={igkey}><span style={{textTransform : "Capitalize"}}>{igkey}</span> : {props.ingrediants[igkey]}</li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p>Total Prices : <strong>{props.prices.toFixed(2)}</strong></p>
            <p>Continue to check out!!</p>
            <Button click={props.close}btnType='Danger'>Cancel</Button>
            <Button click={props.continue}btnType="Success">Continue</Button>
        </Aux>
    );
}

export default OrderSummary;