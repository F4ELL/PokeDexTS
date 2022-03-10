import React from 'react'
import { StyledCard } from './StyledCard'

const Card = ({item}) => {
  return (
    <div>
        <StyledCard>
            <div className='card--container'>
                <div className="card--title">
                    <h2>{item.title}</h2>
                </div>
                <div className="card--number">
                    <span>#001</span>    
                </div>
                <div className="card--type">
                      
                </div>
                
            </div>
        </StyledCard>
    </div>
  )
}

export default Card