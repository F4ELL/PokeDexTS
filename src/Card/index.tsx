import React from 'react'
import { TPoke } from '../App'
import { StyledCard } from './StyledCard'

type TCardPoke = {
    item: TPoke,
    index: number
} 

const Card: React.FC<TCardPoke> = ({item, index}) => {
  return (
    <div>
        <StyledCard>
            <div className='card--container'>
                <div className='card--top'>
                    <div className='card--desc'>
                        <div className="card--title">
                            <h2>{item?.title}</h2>
                        </div>
                        <div className="card--number">                    
                            <span>{`#00${index + 1}`}</span>
                        </div>
                    </div>
                    <div className="card--type">                        
                        <span>{item?.items.types[0].type.name}</span>
                    </div>
                </div>
                <div className="card--image">
                    <img src={item?.items.sprites.other.home.front_default} alt={item?.title} />    
                </div>
                <div className="card--bottom">
                    <div className="card--status">
                        <h3>Status</h3>
                        <ul>
                            <li>HP: {item?.items.stats[0].base_stat}</li>
                            <li>Ataque: {item?.items.stats[1].base_stat}</li>
                            <li>Defesa: {item?.items.stats[2].base_stat}</li>
                            <li>Velocidade: {item?.items.stats[5].base_stat}</li>
                        </ul>
                    </div>
                    <div className="card--skills">
                        <h3>Habilidades</h3>
                        <ul>
                            {item?.items.abilities.map((item, key) => (
                                <li key={key}>{item.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
        </StyledCard>
    </div>
  )
}

export default Card