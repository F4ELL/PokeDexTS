import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({item}) => {
  return (
    <div>
        <StyledButton>                
          <div className='btn--image-area'></div>
          <img src={item.items.sprites.other.home.front_default} alt="Image" />
          <span>{item.title}</span>            
        </StyledButton>
    </div>
  )
}

export default Button