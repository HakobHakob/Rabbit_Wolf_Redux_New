import React from 'react'
import { useDispatch } from 'react-redux'
import { NewGameBoardBtnStyle } from './NewBoardBtnStyle'
import { ADD_NEW_BOARD } from '../Constants'

const CreateNewBoard = () => {
  const dispatch = useDispatch()
  return (
    <NewGameBoardBtnStyle
      onClick={() => {
        dispatch({
          type: ADD_NEW_BOARD,
        })
      }}
    >
      Create New Board
    </NewGameBoardBtnStyle>
  )
}
export { CreateNewBoard }
