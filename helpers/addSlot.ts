import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'

type addSlotProps = {
  slots: SlotProps[],
  indexPosition: number,
  key: string
}

export const addSlot = ({ slots, indexPosition, key }: addSlotProps) => {
  const slotsUpdated = slots.map((slot: SlotProps) => {
    return slot.index === indexPosition
      ? {
          ...slot,
          value: key,
          status: STATUS.FILLED
        }
      : { ...slot }
  })

  return {
    slotsUpdated
  }
}
