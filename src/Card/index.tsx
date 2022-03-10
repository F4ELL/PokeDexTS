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
                    <div className="card--title">
                        <h2>{item?.title}</h2>
                    </div>
                    <div className="card--number">
                        <span>{`#00${index + 1}`}</span>
                    </div>
                    <div className="card--type">
                        <span>{item?.items.types[0].type.name}</span>
                    </div>
                </div>
                <div className="card--bottom">
                    </div>
                
            </div>
        </StyledCard>
    </div>
  )
}

export default Card