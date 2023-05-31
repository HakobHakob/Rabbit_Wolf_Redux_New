import { RABBIT, WOLF, HOME,FENCE,FREE_CELL} from '../Constants'

// const characterDatas = {
//   rabbit: { name: 'r', count: 1 },
//   wolf: { name: 'w' },
//   home: { name: 'h', count: 1 },
//   fence: { name: 'f' },
// }

// const RABBIT = characterDatas.rabbit.name
// const WOLF = characterDatas.wolf.name
// const HOME = characterDatas.home.name
// const FENCE = characterDatas.fence.name
// const FREE_CELL = 0



function findCordOfCharacter(gamePlaceArr, character) {
  const findInGameplace = function(accumulator, row, x) {
    row.forEach((element, y) => {
      if (element === character) {
        accumulator.push([x, y])
      }
    })
    return accumulator
  }
  return gamePlaceArr.reduce(findInGameplace, [])
}

function rabbitCoordinatesForNewCell([x, y]) {
  return [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
}

function rabbitCoordsForCorrect([x, y], gamePlaceArr) {
  const maxValue = gamePlaceArr.length
  x = (x + maxValue) % maxValue
  y = (y + maxValue) % maxValue
  return [x, y]
}

function arrangeNewCoordinates(gamePlaceArr, newCoordsData) {
  return newCoordsData.map(([x, y]) =>
    rabbitCoordsForCorrect([x, y], gamePlaceArr)
  )
}

function setRabbitInNewCoordinates(
  gameStatObject,
  rabbitNewCoordinates,
  rabbitCord,
  arrow
) {
  const gamePlaceArr = gameStatObject.gameGrid
  const [x, y] = rabbitCord
  const [newX, newY] = rabbitNewCoordinates[arrow]

  switch (gamePlaceArr[newX][newY]) {
    case FREE_CELL:
      gamePlaceArr[newX][newY] = RABBIT
      gamePlaceArr[x][y] = FREE_CELL
      return gameStatObject

    case HOME:
      gamePlaceArr[x][y] = FREE_CELL      
      gameStatObject.gameResult = 'You win!'
      gameStatObject.isGameOver = true
      return gameStatObject

    case FENCE:
      return gameStatObject

    case WOLF:
      gameStatObject.gameResult = 'Game Over!'
      gameStatObject.isGameOver = true
      return gameStatObject
  }
}

function setRabbitInNewCell(gameStatObject, arrow) {
  const gamePlaceArr = gameStatObject.gameGrid
  const rabbitCord = findCordOfCharacter(gamePlaceArr, RABBIT)[0]
  const newCoordsData = rabbitCoordinatesForNewCell(rabbitCord)
  const rabbitNewCoordinates = arrangeNewCoordinates(
    gamePlaceArr,
    newCoordsData
  )

  const rabbitInNewCoordinates = setRabbitInNewCoordinates(gameStatObject,rabbitNewCoordinates,rabbitCord,arrow)



  return rabbitInNewCoordinates
}

const RabbitMove = (gameStat, rabbitDirection) => {
  const gameStatObject = { ...gameStat }

  return setRabbitInNewCell(gameStatObject, rabbitDirection)
}

export { RabbitMove }
