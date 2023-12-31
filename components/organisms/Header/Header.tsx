import { FC } from 'react'
import className from 'classnames/bind'
import styles from './Header.module.scss'
import Heading from '@/components/atoms/Heading/Heading'
import SwitchTheme from '@/components/atoms/SwitchTheme/SwitchTheme'
import { StatisticsButtonSVG, TutorialButtonSVG } from '@/components/atoms/Svg'
import { HeaderProps } from './Header.interface'
import Container from '@/components/atoms/Container/Container'
const cx = className.bind(styles)

const Header: FC<HeaderProps> = ({ setTutorialIsOpen, setStatisticsIsOpen }) => {
  return (
    <Container>
      <header className={cx('header')}>
        <div onClick={() => setTutorialIsOpen(true)}>
          <TutorialButtonSVG />
        </div>

        <Heading className={cx('title')} size='lg'>WORDLE</Heading>

        <div className={cx('right-content')}>
          <StatisticsButtonSVG onClick={() => setStatisticsIsOpen(true)} />
          <SwitchTheme />
        </div>
      </header>
    </Container>
  )
}

export default Header
