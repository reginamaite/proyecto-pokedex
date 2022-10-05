import React from "react";

const Nav = () =>{
    return(
        <div className="navbar">
            <div className="title">
                <img className="logo" src="../Imagenes/Pokeball.png" alt="" />
                <h1>Pokédex</h1>
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