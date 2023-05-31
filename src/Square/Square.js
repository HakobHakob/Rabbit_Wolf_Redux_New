import React from 'react'
import { SquareStyle } from './SquareStyle'

const Square = ({ img }) => {
  const characterDatas = {
    rabbit: { name: 'r', src: '../img/nap.png', count: 1 },
    wolf: { name: 'w', src: '../img/wolf.png' },
    home: { name: 'h', src: '../img/home.png', count: 1 },
    fence: { name: 'f', src: '../img/fence.png' },
  }

  const characterImg = img
  let imgSrc

  if (characterImg === 0) {
    return <SquareStyle />
  }

  if (characterImg === characterDatas.rabbit.name) {
    imgSrc = characterDatas.rabbit.src
  }
  if (characterImg === characterDatas.wolf.name) {
    imgSrc = characterDatas.wolf.src
  }
  if (characterImg === characterDatas.fence.name) {
    imgSrc = characterDatas.fence.src
  }
  if (characterImg === characterDatas.home.name) {
    imgSrc = characterDatas.home.src
  }

  return (
    <SquareStyle>
      <img src={imgSrc} alt="#" />
    </SquareStyle>
  )
}

export { Square }
