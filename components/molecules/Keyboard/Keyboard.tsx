import { FC } from 'react'
import styles from './Keyboard.module.scss'
import className from 'classnames/bind'
import { KeyboardProps } from './Keyboard.interface'
import Key from '@/components/atoms/Key/Key'
import { KEYBOARD_SET } from '@/constants/keyboardSet'
import { useKeyboard } from '@/hooks/useKeyboard'
const cx = className.bind(styles)

const Keyboard: FC<KeyboardProps> = ({ className }) => {
  const { keySelected, handleKeyPress } = useKeyboard()

  return (
    <div className={cx('keyboard', className)}>
      {KEYBOARD_SET.map(({ key }) =>
        <Key
          key={key}
          value={key}
          handleKeyPress={handleKeyPress}
          isSelected={key === keySelected}
        />
      )}
    </div>
  )
}

export default Keyboard
