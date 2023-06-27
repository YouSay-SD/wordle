import { FC } from 'react'
import styles from './Key.module.scss'
import className from 'classnames/bind'
import { KeyProps } from './Key.interface'
import { BACKSPACE_KEY } from '@/constants/keyboardSet'
import { BackspaceSVG } from '@/components/atoms/Svg'
import AdaText from '../AdaText/AdaText'
const cx = className.bind(styles)

const Key: FC<KeyProps> = ({ value, isSelected, handleKeyPress }) => {
  const isBackspaceKey = value === BACKSPACE_KEY

  return (
    <button
      className={cx('key', value, { 'is-selected': isSelected }, { 'is-backspace': isBackspaceKey })}
      onClick={() => handleKeyPress(value)}
    >
      {isBackspaceKey ? <BackspaceSVG /> : value}
      <AdaText adaText={`${value} key`} />
    </button>
  )
}

export default Key
