import React from "react";

const Nav = (props) =>{
    return(
        <div className="navbar">
            <div className="title">
                <div className="pokemon-logo">
                    <img className="logo" src="../Imagenes/Pokeball.png" alt="" />
                    <h1>Pokédex</h1>
                </div>
                <div className="order-button">
                    <span onClick={()=>{props.changeOrder()}}>{props.pokemonOrder}</span>
                    <img src="../Imagenes/Arrow.svg" alt="" />
                </div>
            </div>

            <div>
                <form action="#">
                    <input className="input" type="search" placeholder="Buscar" name="search"/>
                </form>
            </div>


        </div>
    )
}

export default Nav