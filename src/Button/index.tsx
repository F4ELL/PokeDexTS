import React from 'react'
import { TPoke } from '../App'
import { StyledButton } from './StyledButton'

type TCurrentPoke = {
  item: TPoke,
  current: (x: number) => void,
  index: number
}

const Button: React.FC<TCurrentPoke> = ({item, current, index}) => {
  return (
    <div>
        <StyledButton onClick={() => current(index)}>                
          <div className='btn--image-area'></div>
          <img src={item.items.sprites.other.home.front_default} alt="Image" />
          <span>{item.title}</span>            
        </StyledButton>
    </div>
  )
}

export default Button