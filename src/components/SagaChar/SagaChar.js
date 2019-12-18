import React from "react";
import "./saga.css";

const SagaChar = props => (
    <div className="card box-shadow--16dp m-3" id={props.id} onClick={props.handleClick}>
       <img className="card-img-top img-fluid" src={props.image} alt={props.name} />
    </div>
);

export default SagaChar;