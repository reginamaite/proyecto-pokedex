import React from "react";
import {useState,useEffect} from 'react'

const Nav = (props) =>{
    const change = (e) => {
        props.setSearch(e.target.value);
    }

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
                    <input value={props.search} onChange={change} className="input" type="search" placeholder="Buscar pokemon" name="search"/>
                </form>
            </div>


        </div>
    )
}

export default Nav

