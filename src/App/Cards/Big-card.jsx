import React from 'react'

const BigCard = (props) =>{

    return(
        <div className='big-card-container fire-name-list'>

            <div className='bgrn-pokeball'>
                <img src="./Imagenes/Pokeball.png" alt="" />
            </div>

            <div className='big-card-nav'>
                <div className='big-card-name'>
                    <img className='color-arrow' src="./Imagenes/arrow-left.svg" alt=""/>
                    <span>Pokemon</span>
                </div>
                <div className='pokemon-number'>
                    <span>#001</span>
                </div>
            </div>
            
            <div className='pokemon-image-container'>
                <img className='pokemon-image' src="./Imagenes/bulbasaur.png" alt="" />
            </div>

            <div className='type-container'>
                <div className='type-box'>
                    <span className='type'>Grass</span>
                    <span className='type'>Grass</span>
                </div>

                <span className='about'>About</span>

                <div className='weight-height-moves'>
                    <div className='body-stat'>
                        <div className='measure-box'>
                            <img src="./Imagenes/Weight.svg" alt="" />
                            <span className='measure'>6,9Kg</span>
                        </div>
                        <span className='span-stat' >Weight</span>
                    </div>

                    <div className='body-stat middle-stat'>
                        <div className='measure-box'>
                            <img src="./Imagenes/Height.svg" alt="" />
                            <span className='measure'>0,7m</span>
                        </div>
                        <span className='span-stat'>Height</span>
                    </div>

                    <div className='body-stat'>
                        <div className='measure-box'>
                            <span className='measure'>Chlorophyll Overgrow</span>
                        </div>
                        <span className='span-stat' >Moves</span>
                    </div>
                </div>

                <div className='stats-container'>
                <div className='description-box'>
                        <p className='description'>There is a plant seed on it's back right
                            from the day this Pokémon is born. The seed
                            slowly grows larger.
                        </p>
                    </div>
                    <span>Base Stats</span>
                        <div className='base-stats-container'>
                            <div className='stat-box-left'>
                                <div className='stat-composition'>
                                    <span>HP</span>
                                    <span>ATK</span>
                                    <span>DEF</span>
                                    <span>SATK</span>
                                    <span>SDEF</span>
                                    <span>SPD</span>
                                </div>
                                
                                <div className='stat-number'>
                                    <span>045</span>
                                    <span>049</span>
                                    <span>049</span>
                                    <span>045</span>
                                    <span>045</span>
                                    <span>045</span>
                                </div>
                            </div>

                            <div className='stat-bar-container'>
                                <div className='stat-bar-bgrn'>
                                    <div className='hp'></div>
                                </div>
                                <div className='stat-bar-bgrn'>
                                    <div className='atk'></div>
                                </div>
                                <div className='stat-bar-bgrn'>
                                    <div className='def'></div>
                                </div>
                                <div className='stat-bar-bgrn'>
                                    <div className='satk'></div>
                                </div>
                                <div className='stat-bar-bgrn'>
                                    <div className='sdef'></div>
                                </div>
                                <div className='stat-bar-bgrn'>
                                    <div className='spd'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default BigCard


            