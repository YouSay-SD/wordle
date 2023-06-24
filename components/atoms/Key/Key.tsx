import { FC } from 'react'
import styles from './Key.module.scss'
import className from 'classnames/bind'
import { KeyProps } from './Key.interface'
import { BACKSPACE_KEY } from '@/constants/keyboardSet'
import { BackspaceSVG } from '@/components/atoms/Svg'
const cx = className.bind(styles)

const Key: FC<KeyProps> = ({ value, isSelected }) => {
  const isBackspaceKey = value === BACKSPACE_KEY
  return (
    <button className={cx('key', value, { 'is-selected': isSelected }, { 'is-backspace': isBackspaceKey })}>
      {isBackspaceKey ? <BackspaceSVG /> : value}
    </button>
  )
}

export default Key
