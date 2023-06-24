import { ReactNode } from 'react'

export interface ModalProps {
  className: string
  onRequestClose: () => void,
  isOpen: boolean,
  contentLabel: string,
  onAfterOpen: () => void,
  overlayClassName: string,
  portalClassName: string,
  children: ReactNode,
}
