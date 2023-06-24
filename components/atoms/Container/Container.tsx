import styles from './Container.module.scss'
import className from 'classnames/bind'
import { ContainerProps } from './Container.interface'
import { FC } from 'react'

const cx = className.bind(styles)

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cx(['container', className])}>{children}</div>
)

export default Container
