import React from "react";

const Card = (props) =>{
    return(
        <div className={props.type}>
            <span className="number-span">{props.number}</span>
            <img className="mini" src={props.pokemon} alt="" />

            <div className={props.title}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}
export default Card;