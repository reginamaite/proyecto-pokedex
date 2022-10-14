import React from "react"


function Detalle() {
    return (
        <div className="card">
            <div className="card-body">
            <h1 className="card"> ← Bulbasaur</h1>
            <h1 className="numero"> #001</h1>
            <img className="mini" src="/Imagenes/bulbasaur.png" />
            <button>Grass</button>
            <button>Poison</button>
            <h3>about</h3>
            <p>esta es la informacion del pokemon en el parrafo</p>
            <h3>Base Stats</h3>
            </div>
        </div>
    )
}

export default Detalle