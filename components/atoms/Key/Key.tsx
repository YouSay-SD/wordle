import { FC } from 'react'
import styles from './Key.module.scss'
import className from 'classnames/bind'
import { KeyProps } from './Key.interface'
const cx = className.bind(styles)

const Key: FC<KeyProps> = ({ value, isSelected }) => {
  return (
    <button className={cx('key', { 'is-selected': isSelected })}>{value}</button>
  )
}

export default Key
