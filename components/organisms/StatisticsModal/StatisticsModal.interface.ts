import { Dispatch, SetStateAction } from 'react'

export interface StatisticsModalProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
