'use client'
import { FC } from 'react'
import Keyboard from '@/components/molecules/Keyboard/Keyboard'
import Board from '@/components/molecules/Board/Board'
import { useWordle } from '@/hooks/useWordle'
import className from 'classnames/bind'
import styles from './Game.module.scss'
import { GameProps } from './Game.interface'
const cx = className.bind(styles)

const Game: FC<GameProps> = ({ isGameStarted, word }) => {
  const { slots, columnsQuantity, keySelected, resetGame } = useWordle({ word, isGameStarted })

  return (
    <div className={cx('game')}>
      <Board slots={slots} col={columnsQuantity} />
      <Keyboard keySelected={keySelected} />
    </div>
  )
}

export default Game
