import React from 'react'
const PokeApi = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard (props) {
    const imgSrc = `${PokeApi}${props.id}.png`
    return (
        <div className='Card'>
            <div className='Poke-title'>{props.name}</div>
            <img className='Poke-img' src = {imgSrc} />
            <div className='Poke-type'>{props.type}</div>
        </div>
    )
}

export default Pokecard;