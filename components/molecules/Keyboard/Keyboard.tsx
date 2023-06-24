import { FC } from 'react'
import styles from './Keyboard.module.scss'
import className from 'classnames/bind'
import { KeyboardProps } from './Keyboard.interface'
import Key from '@/components/atoms/Key/Key'
import { KEYBOARD_SET } from '@/constants/keyboardSet'
const cx = className.bind(styles)

const Keyboard: FC<KeyboardProps> = ({ keySelected }) => {
  return (
    <div className={cx('keyboard')}>
      {KEYBOARD_SET.map(({ key }) => <Key key={key} value={key} isSelected={key === keySelected} />)}
    </div>
  )
}

export default Keyboard
