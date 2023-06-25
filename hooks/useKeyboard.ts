import { useContext, useEffect, useState } from 'react'
import { useCreateSlots } from './useCreateSlots'
import { BACKSPACE_KEY, ENTER_KEY, KEYBOARD_SET } from '@/constants/keyboardSet'
import { actionRemoveSlot } from '@/helpers/deleteSlot'
import { actionAddSlot } from '@/helpers/addSlot'
import { actionValidateSlots, validateSlots } from '@/helpers/validateSlots'
import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'
import { WordleContext } from '@/context/wordleContext'

export interface UseWordleProps {
  isGameStarted: boolean
}

export const useKeyboard = ({ isGameStarted }: UseWordleProps) => {
  const {
    slots,
    victory,
    plays,
    score,
    resetGame,
    indexPosition,
    setIndexPosition,
    limitBackPosition,
    setLimitBackPosition,
    columnsQuantity,
    wordMaped,
    removeSlot,
    addSlot,
    randomWord,
    validateSlots
  } = useContext(WordleContext)
  console.log('indexPosition', indexPosition)
  const [keySelected, setKeySelected] = useState<string>('')
  const [typed, setTypes] = useState<string>('')

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
          const currentSlot = slots.find(({ index }) => index === indexPosition)

          // Back Slot
          if (wasBackspacePressed && indexPosition > limitBackPosition) {
            removeSlot()
            setIndexPosition((prev) => prev - 1)
          }

          setKeySelected(key)

          // Next Slot
          if (!wasBackspacePressed && !wasEnterPressed && indexPosition < slots.length) {
            addSlot({ key })
            setIndexPosition((prev) => prev + 1)

            if (currentSlot?.position === columnsQuantity) {
              setLimitBackPosition(limitBackPosition + columnsQuantity)
              // console.log('validateee')
              // Validate Slots
              validateSlots()

              const valuesInRange = slots.slice(limitBackPosition, columnsQuantity + limitBackPosition).map(({ value }) => value)
              const concatenatedValue = valuesInRange.join('')
              const isMatch = concatenatedValue === randomWord
              if (isMatch) {
                victory()
                resetGame()
              }
            }
          }
        }
      }
    }
    // console.log('slots', slots)
    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [columnsQuantity, indexPosition, keySelected, limitBackPosition, slots, randomWord, wordMaped, isGameStarted, typed, resetGame, removeSlot, setIndexPosition, setLimitBackPosition, victory, addSlot, validateSlots])

  useEffect(() => {
    // Game Finished
    const slotsSolved = !slots.some(({ status }) => status === STATUS.EMPTY)

    if (slotsSolved) {
      plays()
    }
  }, [plays, slots])

  useEffect(() => {
    const wasEnterPressed = keySelected === ENTER_KEY
    const wasBackspacePressed = keySelected === BACKSPACE_KEY
    if (!wasBackspacePressed && !wasEnterPressed) {
      setTypes((prev) => prev + keySelected)
    }
  }, [keySelected])

  return { keySelected, resetCompleteGame }
}
