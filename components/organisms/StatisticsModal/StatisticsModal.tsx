import { FC, useEffect } from 'react'
import styles from './StatisticsModal.module.scss'
import className from 'classnames/bind'
import Modal from '@/components/molecules/Modal/Modal'
import Heading from '@/components/atoms/Heading/Heading'
import P from '@/components/atoms/P/P'
import Button from '@/components/atoms/Button/Button'
import { StatisticsModalProps } from './StatisticsModal.interface'
import { useWordle } from '@/hooks/useWordle'
import { ENTER_KEY } from '@/constants/keyboardSet'
import { WordleContextProps } from '@/context/WordleContext.interface'

const cx = className.bind(styles)

const StatisticsModal: FC<StatisticsModalProps> = ({ setIsOpen, isOpen }) => {
  const { formattedTime, score }: WordleContextProps = useWordle()

  // Close Modal
  const closeModal = () => {
    setIsOpen(false)
  }

  // Close modal with Enter
  useEffect(() => {
    const onKeyPress = ({ key }: KeyboardEvent) => {
      if (key.toLowerCase() === ENTER_KEY) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [setIsOpen])

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Statistics Modal'
      onRequestClose={() => closeModal()}
    >
      <div className={cx('statistics-modal')}>
        <div className={cx('title-container')}>
          <Heading level='h2' className={cx('center-text')}>Estadísticas</Heading>
        </div>

        <div className={cx('scores')}>
          <div className={cx('score-container')}>
            <P className={cx('score')}>{score.plays}</P>
            <P className={cx('score-text')}>Jugadas</P>
          </div>
          <div className={cx('score-container')}>
            <P className={cx('score')}>{score.victories}</P>
            <P className={cx('score-text')}>Victorias</P>
          </div>
        </div>

        <div className={cx('timer-container')}>
          <P className={cx('timer-text')}>SIGUIENTE PALABRA</P>
          <P className={cx('timer-count')}>{formattedTime}</P>
        </div>

        <Button className={cx('button')} buttonText='Aceptar' adaText='Aceptar' onClick={closeModal} />
      </div>
    </Modal>
  )
}

export default StatisticsModal
