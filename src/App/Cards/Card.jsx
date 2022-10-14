import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    function getZeroes(numero){
        return numero.padStart(3,'0')
    }
    return(
        <a href={`/${props.number}`} className="link-pokemon">
            <div className={props.type}>
                <span className="number-span">#{getZeroes(props.number)}</span>
                <img className="mini" src={props.pokemon} alt="" />

                <div className={props.title}>
                    <span>{props.name}</span>
                </div>
            </div>
            </a>
    )
}


export default Card;