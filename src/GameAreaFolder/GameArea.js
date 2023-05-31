import React from 'react'
import { CustomSelect } from '../GameSelect/CustomSelect'
import { useDispatch } from 'react-redux'
import { StartBtnStyle } from '../StartBtnFolder/StartBtnStyle'
import { GameBoard } from '../RendGameBoard/RendGameBoard'
import { OptionsDivStyle } from './OptionsDivStyle'
import { ButtonsDiv } from './ButtonsDiv'
import { ArrowButtons } from '../ArrowButtons/ArrowButtons'
import { MoveCharacters } from './MoveCharacters'
import { ShowMessage } from '../ShowMessage/ShowMessage'
import { RendGameBoardDiv } from '../RendGameBoard/RendGameBoardStyle'
import {
  SET_GAME_START,
  SET_GAME_MATRIX,
  CHANGE_GAME_STATUS,
  SHOW_GAME_RESULT,
  SET_GAME_BOARD_SIZE,
  options,
  directions,
} from '../Constants'

const GameArea = ({ gameState, boardNumber }) => {
  const gameMatrix = gameState.gameGrid
  const gameStatus = gameState.isGameOver
  const gameResult = gameState.gameResult

  const dispatch = useDispatch()

   const setRabbitDirections = (directions) => {
    if (gameStatus === true) {
      return
    }
    const newGameState = MoveCharacters({ ...gameState }, directions)

    dispatch({
      type: SET_GAME_MATRIX,
      payload: {
        gameGrid: newGameState.gameGrid,
        boardNumber,
      },
    })
    dispatch({
      type: CHANGE_GAME_STATUS,
      payload: {
        isGameOver: newGameState.isGameOver,
        boardNumber,
      },
    })
    dispatch({
      type: SHOW_GAME_RESULT,
      payload: {
        gameResult: newGameState.gameResult,
        boardNumber,
      },
    })
  }
  const isGameInProcess = gameStatus === false && gameMatrix.length > 0

  return (
    <>
      <RendGameBoardDiv>
        <OptionsDivStyle>
          <StartBtnStyle
            onClick={() => {
              dispatch({
                type: SET_GAME_START,
                payload: {
                  boardNumber,
                },
              })
            }}
          >
            Start
          </StartBtnStyle>

          {isGameInProcess ? (
            <ButtonsDiv>
              {directions.map((direction, index) => {
                return (
                  <ArrowButtons
                    key={index}
                    direction={direction}
                    onClick={() => setRabbitDirections(direction)}
                  />
                )
              })}
            </ButtonsDiv>
          ) : null}
          <CustomSelect
            options={options}
            onChange={(e) => {
              dispatch({
                type: SET_GAME_BOARD_SIZE,
                payload: {
                  boardSize: parseInt(e.target.value),
                  boardNumber,
                },
              })
            }}
          ></CustomSelect>
        </OptionsDivStyle>

        {gameStatus === true ? (
          <ShowMessage message={gameResult} />
        ) : (
          <div>{<GameBoard array={gameMatrix} />}</div>
        )}
      </RendGameBoardDiv>
    </>
  )
}

export { GameArea }
