import { SlotProps, StatusProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'

type deleteSlotProps = {
  slots: SlotProps[],
  indexPosition: number,
}

export const actionRemoveSlot = ({ slots, indexPosition }: deleteSlotProps) => {
  const slotsUpdated = slots.map((slot: SlotProps) => {
    const indexValidation = (indexPosition - 1)

    return slot.index === indexValidation
      ? {
          ...slot,
          value: '',
          status: STATUS.EMPTY as StatusProps
        }
      : { ...slot }
  })

  return slotsUpdated
}
