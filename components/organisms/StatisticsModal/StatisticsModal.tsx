'use client'
import { FC, useState } from 'react'
import styles from './StatisticsModal.module.scss'
import className from 'classnames/bind'
import Modal from '@/components/molecules/Modal/Modal'
import Heading from '@/components/atoms/Heading/Heading'
import P from '@/components/atoms/P/P'
import Button from '@/components/atoms/Button/Button'

const cx = className.bind(styles)

const StatisticsModal: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  // Close Modal
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Statistics Modal'
      onRequestClose={() => closeModal()}
    >
      <div className={cx('statistics-modal')}>
        <div className={cx('title-container')}>
          <Heading className={cx('center-text')}>Estadísticas</Heading>
        </div>

        <div className={cx('scores')}>
          <div className={cx('score')}>
            <P>8</P>
            <P>Jugadas</P>
          </div>
          <div className={cx('score')}>
            <P>2</P>
            <P>Victorias</P>
          </div>
        </div>

        <div className={cx('timer-container')}>
          <P>SIGUIENTE PALABRA</P>
          <P>04:10</P>
        </div>

        <Button className={cx('button')} buttonText='Aceptar' adaText='Aceptar' onClick={closeModal} />
      </div>
    </Modal>
  )
}

export default StatisticsModal
