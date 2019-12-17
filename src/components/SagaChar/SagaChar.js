import React from "react";
import "./saga.css";

const SagaChar = props => (
    <div className="card" id={props.id} onClick={props.handleClick}>
        <img className="card-img" src={props.image} alt={props.name} />
    </div>
);

export default SagaChar;