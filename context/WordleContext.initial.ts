import { WordleContextProps } from './WordleContext.interface'

export const initialState: WordleContextProps = {
  slots: [],
  setSlots: () => {},
  score: {
    plays: 0,
    victories: 0
  },
  wordMaped: undefined,
  timeRemaining: 0,
  formattedTime: '',
  indexPosition: 0,
  limitBackPosition: 0,
  columnsQuantity: undefined,
  isGameStarted: false,
  setIsGameStarted: () => {},
  setLimitBackPosition: () => {},
  setIndexPosition: () => {},
  resetGame: () => {},
  validateSlots: () => {},
  removeSlot: () => {},
  addSlot: () => {},
  victoryScore: () => {},
  playsScore: () => {},
  randomWord: ''
}
