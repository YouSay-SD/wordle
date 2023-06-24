import styles from './Button.module.scss'
import className from 'classnames/bind'
import { FC } from 'react'
import { ButtonProps } from './Button.interface'
import AdaText from '../AdaText/AdaText'
const cx = className.bind(styles)

const Button: FC<ButtonProps> = ({
  onClick,
  buttonText,
  className,
  adaText
}) => {
  return (
    <button onClick={onClick} className={cx(['button', className])}>
      {buttonText ? <span>{buttonText}</span> : null}
      {adaText ? <AdaText adaText={adaText} /> : null}
    </button>
  )
}

export default Button
