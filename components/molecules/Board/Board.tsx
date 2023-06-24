import { FC } from 'react'
import styles from './Board.module.scss'
import className from 'classnames/bind'
import Slot from '@/components/atoms/Slot/Slot'
import { BoardProps } from './Board.interface'
const cx = className.bind(styles)

const Board: FC<BoardProps> = ({ slots, col }) => {
  return (
    <div className={cx('board')} style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}>
      {slots.map((slot, index) => <Slot key={index} {...slot} />)}
    </div>
  )
}

export default Board
