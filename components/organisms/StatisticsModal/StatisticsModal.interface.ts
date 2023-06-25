import { Dispatch, SetStateAction } from 'react'

export interface StatisticsModalProps {
  timeRemaining: string,
  score: any,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
