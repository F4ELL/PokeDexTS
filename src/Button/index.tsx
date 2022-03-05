import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({item}) => {
  return (
    <div>
        <StyledButton>
            <div className='btn--container'>
                <div className='btn--img-area'>
                    <img src={item.items.sprites.other.home.front_default} alt="alo" />
                </div>
                <span>{item.title}</span>
            </div>
        </StyledButton>
    </div>
  )
}

export default Button