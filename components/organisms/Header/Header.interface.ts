import { Dispatch, SetStateAction } from 'react'

export interface HeaderProps {
  setTutorialIsOpen: Dispatch<SetStateAction<boolean>>,
  setStatisticsIsOpen: Dispatch<SetStateAction<boolean>>
}
