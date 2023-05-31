export const SET_GAME_START = 'SET_GAME_START'
export const SET_GAME_MATRIX = 'SET_GAME_MATRIX'
export const CHANGE_GAME_STATUS = 'SET_GAME_STATUS'
export const SHOW_GAME_RESULT = 'SHOW_GAME_RESULT'
export const SET_GAME_BOARD_SIZE = 'GAME_BOARD_SIZE'
export const CREATE_NEW_GAME = 'NEW_GAME'
export const ADD_NEW_BOARD = 'ADD_NEW_BOARD'

export const options = [
  { value: 5, label: '5 x 5' },
  { value: 7, label: '7 x 7' },
  { value: 10, label: '10 x 10' },
]

export const directions = [0, 1, 2, 3]



export const characterDatas = {
    rabbit: { name: 'r', count: 1 },
    wolf: { name: 'w' },
    home: { name: 'h', count: 1 },
    fence: { name: 'f' },
  }
  
export  const RABBIT = characterDatas.rabbit.name
export  const WOLF = characterDatas.wolf.name
export  const HOME = characterDatas.home.name
export  const FENCE = characterDatas.fence.name
export  const FREE_CELL = 0