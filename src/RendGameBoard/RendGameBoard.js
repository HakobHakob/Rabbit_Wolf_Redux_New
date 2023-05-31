import React from 'react'
import { Square } from '../Square/Square'
import { RendGameBoardDiv } from './RendGameBoardStyle'

const GameBoard = ({ array }) => {

  return (
    <RendGameBoardDiv>
      
      {array.map((row, i) => (
        <div key={i}>
          {row.map((column, j) => (
            <Square key={j} img={column} />
          ))}
        </div>
      ))}
    </RendGameBoardDiv>
  )
}
export { GameBoard }
