import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({item}) => {
  return (
    <div>
        <StyledButton>
            <img src={item.items.sprites.other.home.front_default} alt="alo" />
            {item.title}
        </StyledButton>
    </div>
  )
}

export default Button