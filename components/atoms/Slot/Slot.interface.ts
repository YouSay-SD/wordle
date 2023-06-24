export type StatusProps = 'success' | 'filled' | 'close' | 'empty';

export interface SlotProps {
  value: string,
  status: StatusProps,
  position: number,
  index: number
}
