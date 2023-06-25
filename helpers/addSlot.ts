import { SlotProps, StatusProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'

interface AddSlotProps {
  slots: SlotProps[],
  indexPosition: number,
  key: string
}

export const actionAddSlot = ({ slots, indexPosition, key }: AddSlotProps):SlotProps[] => {
  const slotsUpdated: SlotProps[] = slots.map((slot: SlotProps):SlotProps => {
    return slot.index === indexPosition
      ? {
          ...slot,
          value: key,
          status: STATUS.FILLED as StatusProps
        }
      : { ...slot }
  })

  return slotsUpdated
}
