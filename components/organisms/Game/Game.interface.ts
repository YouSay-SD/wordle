import { SlotProps } from '@/components/atoms/Slot/Slot.interface'

export interface GameProps {
  slots: SlotProps[],
  keySelected: string,
  columnsQuantity: number,
}
