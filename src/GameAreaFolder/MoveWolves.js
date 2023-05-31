const characterDatas = {
  rabbit: { name: 'r', src: '../img/nap.png', count: 1 },
  wolf: { name: 'w', src: '../img/wolf.png' },
  home: { name: 'h', src: '../img/home.png', count: 1 },
  fence: { name: 'f', src: '../img/fence.png' },
}

const RABBIT = characterDatas.rabbit.name
const WOLF = characterDatas.wolf.name
const FREE_CELL = 0

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

function findCellsArroundWolves(gamePlaceArr, [x, y]) {
  const review = [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  const allBoxesAroundWolves = review.filter((boxes) =>
    conditionXandYinGamePlace(gamePlaceArr, boxes)
  )
  return allBoxesAroundWolves
}

function conditionXandYinGamePlace(gamePlaceArr, [x, y]) {
  return x >= 0 && x < gamePlaceArr.length && y >= 0 && y < gamePlaceArr.length
}

function findEmptyCellsAroundWolf(gameStatObject, cords) {
  const gamePlaceArr = gameStatObject.gameGrid

  const rabbitFound = cellCharacter(gamePlaceArr, cords, RABBIT)

  if (rabbitFound.length > 0) {
    gameStatObject.isGameOver = true
    gameStatObject.gameResult = 'Game over!'
    return gameStatObject
  } else {
    return cellCharacter(gamePlaceArr, cords, FREE_CELL)
  }
}

function cellCharacter(gamePlaceArr, cells, character) {
  return cells.filter(([x, y]) => gamePlaceArr[x][y] === character)
}

function shortestDistanceBox(emtyCellsAroundWolves, gameStatObject) {
  const gamePlaceArr = gameStatObject.gameGrid

  if (gameStatObject.isGameOver === true) {
    return gameStatObject
  } else {
    const distanceArray = getDistances(emtyCellsAroundWolves, gamePlaceArr)
    const minOfDistances = Math.min(...distanceArray)
    const index = distanceArray.indexOf(minOfDistances)

    return emtyCellsAroundWolves[index]
  }
}

function getDistances(emtyCellsAroundWolves, gamePlaceArr) {
  const rabbitCord = findCordOfCharacter(gamePlaceArr, RABBIT)

  const cells = emtyCellsAroundWolves.map((cord) => {
    return calculateDistanceFromRabbit(cord, rabbitCord)
  })
  return cells
}

function calculateDistanceFromRabbit([x1, y1], [[x2, y2]]) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function moveWolves(gameStatObject, wolvesCord, minDistanceData) {
  const gamePlaceArr = gameStatObject.gameGrid

  if (gameStatObject.isGameOver === true) {
    return gameStatObject
  }

  const [q, k] = wolvesCord
  const [a, b] = minDistanceData

  gamePlaceArr[a][b] = WOLF
  gamePlaceArr[q][k] = FREE_CELL
  return gameStatObject
}

function getWolvesCoordinatesAndMove(gameStatObject) {
  if (gameStatObject.isGameOver === true) {
    return gameStatObject
  } else {
    const gamePlaceArr = gameStatObject.gameGrid

    const wolvesCoordinates = findCordOfCharacter(gamePlaceArr, WOLF)

    let finalState
    wolvesCoordinates.forEach((wolf) => {
      const cells = findCellsArroundWolves(gamePlaceArr, wolf)

      const emtyCells = findEmptyCellsAroundWolf(gameStatObject, cells)

      const shortDistance = shortestDistanceBox(emtyCells, gameStatObject)

      finalState = moveWolves(gameStatObject, wolf, shortDistance)
    })
    return finalState
  }
}

const MoveWolves = (gameStat) => {
  const gameStatObject = { ...gameStat }
  return getWolvesCoordinatesAndMove(gameStatObject)
}

export { MoveWolves }
