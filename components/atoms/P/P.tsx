import className from 'classnames/bind'
import styles from './P.module.scss'
import { FC } from 'react'
import { PProps } from './P.interface'

const cx = className.bind(styles)

const P:FC<PProps> = ({ children, size = 'md', className }) => (
  <p className={cx(['p', size, className])}>{children}</p>
)

export default P
