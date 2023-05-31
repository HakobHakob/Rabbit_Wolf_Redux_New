import React from 'react'
import { StartBtnStyle } from './StartBtnStyle';

const StartBtn = ({ onClick }) => {
  return <StartBtnStyle onClick={onClick}>Start</StartBtnStyle>
}

export { StartBtn }