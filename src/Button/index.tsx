import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({item}) => {
  return (
    <div>
        <StyledButton>
            {item.title}
        </StyledButton>
    </div>
  )
}

export default Button