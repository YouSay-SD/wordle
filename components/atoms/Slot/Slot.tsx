import { FC } from 'react'
import styles from './Slot.module.scss'
import className from 'classnames/bind'
import { SlotProps } from './Slot.interface'
const cx = className.bind(styles)

const Slot: FC<SlotProps> = ({ value, status }) => {
  return (
    <div className={cx(['slot', status])}>{value}</div>
  )
}

export default Slot
