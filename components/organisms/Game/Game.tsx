import { FC } from 'react'
import Keyboard from '@/components/molecules/Keyboard/Keyboard'
import Board from '@/components/molecules/Board/Board'
import className from 'classnames/bind'
import styles from './Game.module.scss'
import { GameProps } from './Game.interface'
import Container from '@/components/atoms/Container/Container'
const cx = className.bind(styles)

const Game: FC<GameProps> = ({ slots, columnsQuantity }) => {
  return (
    <Container className={cx('game')}>
      <Board slots={slots} col={columnsQuantity} />
      <Keyboard className={cx('game-keyboard')} />
    </Container>
  )
}

export default Game
