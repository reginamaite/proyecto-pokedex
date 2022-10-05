import React from "react";

const Card = ({type,number,pokemon,title,name}) =>{
    return(
        <div className={type}>
            <span>{number}</span>
            <img src={pokemon} alt="" />

            <div className={title}>
                <span>{name}</span>
            </div>
        </div>
    )
}
export default Card;