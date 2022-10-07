import React from "react";

const Card = (props) =>{
    function getZeroes(numero){
        return numero.padStart(3,'0')
    }
    return(
            <div className={props.type}>
                <span className="number-span">#{getZeroes(props.number)}</span>
                <img className="mini" src={props.pokemon} alt="" />

                <div className={props.title}>
                    <span>{props.name}</span>
                </div>
            </div>
    )
}
export default Card;