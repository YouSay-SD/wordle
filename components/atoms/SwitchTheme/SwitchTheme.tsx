'use client'
import { useTheme } from 'next-themes'
import className from 'classnames/bind'
import styles from './SwitchTheme.module.scss'
import AdaText from '../AdaText/AdaText'
const cx = className.bind(styles)

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button onClick={toggleTheme} className={`${cx('switch-theme')} switch-theme`}>
      <div className={`${cx('circle')} circle-theme`} />
      <AdaText adaText='Switch Theme Button' />
    </button>
  )
}

export default SwitchTheme
