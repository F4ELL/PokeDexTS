import React from 'react'
import { StyledButton } from './StyledButton'

const Button = ({item}) => {
  return (
    <div>
        <StyledButton>
            
                
                <div className='btn--image-area'></div>
                
                <span>{item.title}</span>
            
        </StyledButton>
    </div>
  )
}

export default Button