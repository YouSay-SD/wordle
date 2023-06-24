export type StatusProps = 'correct' | 'wrong' | 'close' | 'empty';

export interface SlotProps {
  value: string,
  status: StatusProps,
  position: number,
  index: number
}
