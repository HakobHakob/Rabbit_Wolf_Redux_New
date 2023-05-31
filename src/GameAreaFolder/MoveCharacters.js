import { RabbitMove } from './MoveRabbit'
import { MoveWolves } from './MoveWolves'

const MoveCharacters = (gameObject, directions) => {

  return MoveWolves(RabbitMove(gameObject, directions))
}

export { MoveCharacters }
