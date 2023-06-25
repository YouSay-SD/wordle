import { FC } from 'react'
import ReactModal from 'react-modal'
import { ModalProps } from './Modal.interface'

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
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      onAfterOpen={onAfterOpen}
      ariaHideApp={false}
      {...props}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
