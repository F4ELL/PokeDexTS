import React from 'react'
import { TPoke } from '../App'
import { StyledButton } from './StyledButton'

type TCurrentPoke = {
  item: TPoke,
  setCurrent: (x: number) => void,
  index: number,
  current: number
}

const Button: React.FC<TCurrentPoke> = ({item, setCurrent, index, current}) => {
  return (
    <div>
        <StyledButton onClick={() => setCurrent(index)} selected={index === current} buttonColor={item.color}>                
          <div className='btn--image-area'></div>
          <img src={item.items.sprites.other.home.front_default} alt="Image" />
          <span>{item.title}</span>            
        </StyledButton>
    </div>
  )
}

export default Button