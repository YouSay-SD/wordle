import { useEffect, useState } from 'react'
import { BACKSPACE_KEY, ENTER_KEY, KEYBOARD_SET } from '@/constants/keyboardSet'
import { useWordle } from './useWordle'

export interface UseWordleProps {
  isGameStarted: boolean
}

export interface UseKeyboardProps {
  keySelected: string;
  resetCompleteGame: () => void;
  handleKeyPress: (keyValue: string) => void;
}

export const useKeyboard = (): UseKeyboardProps => {
  const {
    slots,
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
  }

  useEffect(() => {
    resetCompleteGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomWord])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (keyValue : string) => {
    if (isGameStarted) {
      const key = keyValue.toLowerCase()
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
          addSlot({ key })
        }
      }
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onKeyPress = ({ key }: any) => {
      handleKeyPress(key)
    }

    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [handleKeyPress])

  return { keySelected, resetCompleteGame, handleKeyPress }
}
