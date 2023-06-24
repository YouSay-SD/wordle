import React, { FC } from 'react'
import ReactModal from 'react-modal'
import styles from './Modal.module.scss'
import { ModalProps } from './Modal.interface'
import className from 'classnames/bind'

const cx = className.bind(styles)

ReactModal.setAppElement('#__next')

const Modal: FC<ModalProps> = ({
  className,
  onRequestClose,
  isOpen,
  contentLabel,
  onAfterOpen,
  overlayClassName = '',
  portalClassName = '',
  children,
  ...props
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={className}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      onAfterOpen={onAfterOpen}
      overlayClassName={cx(['overlay', overlayClassName])}
      portalClassName={cx(['portal', portalClassName])}
      {...props}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
