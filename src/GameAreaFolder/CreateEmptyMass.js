const characterDatas = {
    rabbit: { name: 'r', count: 1 },
    wolf: { name: 'w' },
    home: { name: 'h', count: 1 },
    fence: { name: 'f' },
  }
  const RABBIT = characterDatas.rabbit.name
  const WOLF = characterDatas.wolf.name
  const HOME = characterDatas.home.name
  const FENCE = characterDatas.fence.name
  const FREE_CELL = 0
  
  function getRandomPosition(gamePlaceArr) {
    const x = Math.floor(Math.random() * gamePlaceArr.length)
    const y = Math.floor(Math.random() * gamePlaceArr.length)
  
    if (gamePlaceArr[x][y] === FREE_CELL) {
      return [x, y]
    } else {
      return getRandomPosition(gamePlaceArr)
    }
  }
  
  function setCharacterAtRandomPosition(gamePlaceArr, character) {
    const [x, y] = getRandomPosition(gamePlaceArr)
    gamePlaceArr[x][y] = character
  }
  
  function setCharacters(gamePlaceArr, character, characterCount) {
    for (let i = 0; i < characterCount; i++) {
      setCharacterAtRandomPosition(gamePlaceArr, character)
    }
  }
  function createEmptyMass(gameBoardSize) {
    const gameBoard = new Array(gameBoardSize)
      .fill(FREE_CELL)
      .map(() => new Array(gameBoardSize).fill(FREE_CELL))
  
    return gameBoard
  }
  
  const CreateGameArray = (gameBoardSize) => {
  
    const gameMatrix = createEmptyMass(gameBoardSize)
    const wolfCount = Math.ceil((60 * gameBoardSize) / 100)
    const fenceCount = Math.ceil((40 * gameBoardSize) / 100)
    setCharacters(gameMatrix, WOLF, wolfCount)
    setCharacters(gameMatrix, FENCE, fenceCount)
    setCharacters(gameMatrix, RABBIT, 1)
    setCharacters(gameMatrix, HOME, 1)
  
    return gameMatrix
  }
  
  export { CreateGameArray }
  