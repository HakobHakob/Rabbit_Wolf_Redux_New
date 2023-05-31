import React from 'react'
import { DirectionButtons } from './DirectionButtons'
import { ArrowsDivStyle } from './ArrowButtonsStyle'

const ArrowButtons = ({ onClick,direction }) => {
  return (
    <ArrowsDivStyle>
      <DirectionButtons
        direction={direction}
        onClick={onClick}
      >        
      </DirectionButtons>
    </ArrowsDivStyle>
  )
}

export { ArrowButtons }
