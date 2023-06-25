'use client'
import { FC } from 'react'
import Keyboard from '@/components/molecules/Keyboard/Keyboard'
import Board from '@/components/molecules/Board/Board'
import className from 'classnames/bind'
import styles from './Game.module.scss'
import { GameProps } from './Game.interface'
const cx = className.bind(styles)

const Game: FC<GameProps> = ({ slots, columnsQuantity, keySelected }) => {
  return (
    <div className={cx('game')}>
      <Board slots={slots} col={columnsQuantity} />
      <Keyboard className={cx('game-keyboard')} keySelected={keySelected} />
    </div>
  )
}

export default Game
