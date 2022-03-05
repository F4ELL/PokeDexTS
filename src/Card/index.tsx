import React from 'react'
import { StyledCard } from './StyledCard'

const Card = ({item}) => {
  return (
    <div>
        <StyledCard>
            <div className='card--container'>
                <div className="card--title"></div>
                <div className="card--id"></div>
                <div className="card--style"></div>
                <div className="card-image"></div>
                <div className="card--info">
                    <div className="card--status">
                        <h3>Status</h3>
                    </div>
                    <div className="card--skills">
                        <h3>Habilidades</h3>
                    </div>
                </div>
            </div>
        </StyledCard>
    </div>
  )
}

export default Card