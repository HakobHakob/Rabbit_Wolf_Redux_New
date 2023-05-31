import React from 'react'
import { AppStyles } from './AppStyle'
import { CreateNewBoard } from '../CreateNewBoard/NewGameBoardBtn'
import { GameArea } from '../GameAreaFolder/GameArea'
import { useSelector } from 'react-redux'

const getGameBoards = (state) => state.gameBoards

function App() {
  const gameBoards = useSelector(getGameBoards)

  return (
    <AppStyles>
      <CreateNewBoard />
      {gameBoards.map((gameState, i) => (
        <GameArea key={i} gameState={gameState} boardNumber={i} />
      ))}
    </AppStyles>
  )
}
export default App
