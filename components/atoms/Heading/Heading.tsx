import { FC } from 'react'
import styles from './Heading.module.scss'
import className from 'classnames/bind'
import { HeadingProps } from './Heading.interface'

const cx = className.bind(styles)

const Heading: FC<HeadingProps> = ({
  level = 'h1',
  size = 'md',
  children,
  className
}) => {
  const HTag = level

  return (
    <HTag className={cx(['heading', size, level, className])}>
      {children}
    </HTag>
  )
}

export default Heading
