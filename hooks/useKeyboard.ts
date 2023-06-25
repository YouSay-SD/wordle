import { useEffect, useState } from 'react'
import { BACKSPACE_KEY, ENTER_KEY, KEYBOARD_SET } from '@/constants/keyboardSet'
import { useWordle } from './useWordle'

export interface UseWordleProps {
  isGameStarted: boolean
}

export interface UseKeyboardProps {
  keySelected: string;
  resetCompleteGame: () => void;
}

export const useKeyboard = (): UseKeyboardProps => {
  const {
    slots,
    resetGame,
    indexPosition,
    limitBackPosition,
    removeSlot,
    addSlot,
    randomWord,
    isGameStarted
  } = useWordle()
  const [keySelected, setKeySelected] = useState<string>('')

  // Reset Game
  const resetCompleteGame = () => {
    setKeySelected('')
    resetGame()
  }

  useEffect(() => {
    resetCompleteGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomWord])

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (isGameStarted) {
        const key = e.key.toLowerCase()
        const isKeyAllowed = KEYBOARD_SET.some((keyValue) => keyValue.key === key)
        if (isKeyAllowed) {
          const wasEnterPressed = key === ENTER_KEY
          const wasBackspacePressed = key === BACKSPACE_KEY

          // Back Slot
          if (wasBackspacePressed && indexPosition > limitBackPosition) {
            removeSlot()
          }

          setKeySelected(key)

          // Next Slot
          if (!wasBackspacePressed && !wasEnterPressed && indexPosition < slots.length) {
            addSlot({ indexPosition, key })
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [addSlot, indexPosition, isGameStarted, limitBackPosition, removeSlot, slots.length])

  return { keySelected, resetCompleteGame }
}
