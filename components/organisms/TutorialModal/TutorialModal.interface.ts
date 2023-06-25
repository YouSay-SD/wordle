import { Dispatch, SetStateAction } from 'react'

export interface TutorialModalProps {
  setIsGameStarted: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean,
}
