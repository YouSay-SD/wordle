import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ScoreProps {
  plays: number;
  victories: number;
}

export interface WordleContextProps {
  slots: SlotProps[];
  setSlots: (slots: SlotProps[]) => void;
  score: ScoreProps;
  wordMaped: string[] | undefined;
  timeRemaining: number;
  formattedTime: string;
  indexPosition: number;
  limitBackPosition: number;
  columnsQuantity: number | undefined;
  isGameStarted: boolean;
  setIsGameStarted: Dispatch<SetStateAction<boolean>>,
  setLimitBackPosition: (limitBackPosition: number) => void;
  setIndexPosition: (indexPosition: number) => void;
  resetGame: () => void;
  validateSlots: (props: { slots: SlotProps[] }) => void;
  removeSlot: () => void;
  addSlot: (props: { key: string }) => void;
  victoryScore: () => void;
  playsScore: () => void;
}

export interface WordleProviderProps {
  children: ReactNode;
}
