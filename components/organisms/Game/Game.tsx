'use client'
import React, { FC } from 'react'
import Keyboard from '@/components/molecules/Keyboard/Keyboard'
import Board from '@/components/molecules/Board/Board'
import Button from '@/components/atoms/Button/Button'
import { useWordle } from '@/hooks/useWordle'
import className from 'classnames/bind'
import styles from './Game.module.scss'
const cx = className.bind(styles)

const Game: FC = () => {
  const word = 'yousay'
  const { slots, columnsQuantity, keySelected, resetGame } = useWordle({ word })

  return (
    <div className={cx('game')}>
      <Board slots={slots} col={columnsQuantity} />
      <Keyboard keySelected={keySelected} />
      <Button buttonText='!JUGAR¡' adaText='!JUGAR¡' onClick={resetGame} />
    </div>
  )
}

export default Game
