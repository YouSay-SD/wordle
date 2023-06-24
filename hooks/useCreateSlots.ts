import { StatusProps } from '@/components/atoms/Slot/Slot.interface'
import { GAME_ROWS } from '../constants/gameConfig'
import { STATUS } from '@/constants/status'

export interface UseCreateSlotsProps {
  columnsQuantity: number
}

export const useCreateSlots = ({ columnsQuantity }: UseCreateSlotsProps) => {
  const slotsQuantity = GAME_ROWS * columnsQuantity
  let position = 1
  let started = false

  const slotsMaped = new Array(slotsQuantity).fill('').map((_, index) => {
    const isAMultiple = position % columnsQuantity === 0
    if (isAMultiple) {
      position = 1
    }

    if (!isAMultiple && started) {
      position++
    }

    started = true
    return { index, value: '', position, status: STATUS.EMPTY as StatusProps }
  })

  return {
    slotsMaped
  }
}
