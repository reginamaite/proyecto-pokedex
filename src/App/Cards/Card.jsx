import React from "react";

const Card = ({box,type,number,pokemon,title,name}) =>{
    return(
        <div className={(box,type)}>
            <span className="number-span">{number}</span>
            <img className="mini" src={pokemon} alt="" />

            <div className={title}>
                <span>{name}</span>
            </div>
        </div>
    )
}
export default Card;