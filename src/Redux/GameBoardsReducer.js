import {
  ADD_NEW_BOARD,
  SET_GAME_BOARD_SIZE,
  SET_GAME_START,
  SET_GAME_MATRIX,
  CHANGE_GAME_STATUS,
  SHOW_GAME_RESULT,
} from '../Constants'
import { CreateGameArray } from '../GameAreaFolder/CreateEmptyMass'

const newBoard = {
  gameGrid: [],
  isGameOver: false,
  gameResult: '',
  boardSize: 5,
}

export const initialState = []

export const GameBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_START:
      state[action.payload.boardNumber] = {
        ...state[action.payload.boardNumber],
        gameGrid: CreateGameArray(state[action.payload.boardNumber].boardSize),
        isGameOver: false,
        gameResult: '',
      }

      return [...state]

    case SET_GAME_BOARD_SIZE:
      const newState = [...state]
      newState[action.payload.boardNumber].boardSize = action.payload.boardSize

      return newState

    case ADD_NEW_BOARD:
      return [...state, { ...newBoard }]

    case SET_GAME_MATRIX:
      const getStateForMatrix = [...state]
      getStateForMatrix[action.payload.boardNumber].gameGrid =
        action.payload.gameGrid

      return [...state]

    case CHANGE_GAME_STATUS:
      const getStateForStatus = [...state]
      getStateForStatus[action.payload.boardNumber].isGameOver =
        action.payload.isGameOver

      return [...state]
    case SHOW_GAME_RESULT:
      const getStateForResult = [...state]
      getStateForResult[action.payload.boardNumber].gameResult =
        action.payload.gameResult

      return [...state]

    default:
      return state
  }
}
