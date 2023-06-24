import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'

type validateSlotsProps = {
  slots: SlotProps[],
  wordMaped: string[],
}

export const validateSlots = ({ slots, wordMaped }: validateSlotsProps) => {
  const slotsValidated = slots.map((slot: SlotProps) => {
    const isClose = wordMaped.find((letter: string) => letter === slot.value)
    const isSuccess = wordMaped[slot.position - 1] === slot.value
    let status = STATUS.FILLED
    if (isClose) status = STATUS.CLOSE
    if (isSuccess) status = STATUS.SUCCESS

    return {
      ...slot,
      status: slot.status === STATUS.EMPTY ? STATUS.EMPTY : status
    }
  })

  return {
    slotsValidated
  }
}
