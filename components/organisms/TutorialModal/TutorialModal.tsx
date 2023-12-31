import { FC, useEffect } from 'react'
import styles from './TutorialModal.module.scss'
import className from 'classnames/bind'
import Modal from '@/components/molecules/Modal/Modal'
import Heading from '@/components/atoms/Heading/Heading'
import P from '@/components/atoms/P/P'
import Slot from '@/components/atoms/Slot/Slot'
import { STATUS } from '@/constants/status'
import { StatusProps } from '@/components/atoms/Slot/Slot.interface'
import Button from '@/components/atoms/Button/Button'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { TutorialModalProps } from './TutorialModal.interface'
import { ENTER_KEY } from '@/constants/keyboardSet'
const cx = className.bind(styles)

const TutorialModal: FC<TutorialModalProps> = ({ setIsGameStarted, setIsOpen, isOpen }) => {
  // Close Modal
  const closeModal = () => {
    setIsOpen(false)
    localStorage.setItem(KEY_LOCAL_STORAGE, 'true')
    setIsGameStarted(true)
  }

  useEffect(() => {
    const skipTutorialStorage = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))

    if (!skipTutorialStorage) {
      setIsOpen(true)
    }
  }, [setIsOpen])

  // Close modal with Enter
  useEffect(() => {
    const onKeyPress = ({ key }: KeyboardEvent) => {
      if (key.toLowerCase() === ENTER_KEY) {
        closeModal()
      }
    }

    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsOpen])

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Tutorial Modal'
      onRequestClose={() => closeModal()}
    >
      <div className={cx('tutorial-modal')}>
        <div className={cx('explanation')}>
          <Heading level='h2' className={cx('center-text')}>Cómo jugar</Heading>
          <P>Adivina la palabra oculta en cinco intentos. </P>
          <br />
          <P>Cada intento debe ser una palabra válida de 5 letras.</P>
          <br />
          <P>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</P>
        </div>

        <div className={cx('examples')}>
          <P className={cx('example-title')}>Ejemplos</P>
          <div className={cx('example-items')}>
            <Slot status={STATUS.SUCCESS as StatusProps} value='G' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='A' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='T' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='O' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='S' position={1} index={0} />
          </div>
          <P>La letra <span>G</span> está en la palabra y en la posición correcta.</P>

          <div className={cx('example-items')}>
            <Slot status={STATUS.EMPTY as StatusProps} value='V' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='O' position={1} index={0} />
            <Slot status={STATUS.CLOSE as StatusProps} value='C' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='A' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='L' position={1} index={0} />
          </div>
          <P>La letra <span>C</span> está en la palabra pero en la posición incorrecta.</P>

          <div className={cx('example-items')}>
            <Slot status={STATUS.EMPTY as StatusProps} value='C' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='A' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='N' position={1} index={0} />
            <Slot status={STATUS.EMPTY as StatusProps} value='T' position={1} index={0} />
            <Slot status={STATUS.FILLED as StatusProps} value='O' position={1} index={0} />
          </div>
          <P>La letra <span>O</span> no está en la palabra.</P>
        </div>

        <div className={cx('explanation')}>
          <P>Puede haber letras repetidas. Las pistas son independientes para cada letra.</P>
        </div>

        <P className={cx('center-text', 'last-paragraph')}>¡Una palabra nueva cada 5 minutos!</P>
        <Button className={cx('button')} buttonText='!JUGAR¡' adaText='!JUGAR¡' onClick={closeModal} />
      </div>
    </Modal>
  )
}

export default TutorialModal
