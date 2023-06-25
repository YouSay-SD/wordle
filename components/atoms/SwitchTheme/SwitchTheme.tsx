'use client'
import { useTheme } from 'next-themes'
import className from 'classnames/bind'
import styles from './SwitchTheme.module.scss'
const cx = className.bind(styles)

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button onClick={toggleTheme} className={`${cx('switch-theme')} switch-theme`}>
      <div className={`${cx('circle')} circle-theme`} />
    </button>
  )
}

export default SwitchTheme
