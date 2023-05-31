import { combineReducers, createStore } from 'redux'
import { GameBoardsReducer } from './GameBoardsReducer'

const rootReducer = combineReducers({
  gameBoards: GameBoardsReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export { store }
