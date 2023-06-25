import { useEffect, useState } from 'react'
import { useCreateSlots } from './useCreateSlots'
import { BACKSPACE_KEY, ENTER_KEY, KEYBOARD_SET } from '@/constants/keyboardSet'
import { deleteSlot } from '@/helpers/deleteSlot'
import { addSlot } from '@/helpers/addSlot'
import { validateSlots } from '@/helpers/validateSlots'
import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'

export interface UseWordleProps {
  word: string,
  isGameStarted: boolean
}

export const useWordle = ({ word, isGameStarted }: UseWordleProps) => {
  const wordMaped = word.split('')
  const columnsQuantity = word.length
  const { slotsMaped } = useCreateSlots({ columnsQuantity })
  const [slots, setSlots] = useState<SlotProps[]>(slotsMaped)
  const [keySelected, setKeySelected] = useState<string>('')
  const [indexPosition, setIndexPosition] = useState<number>(0)
  const [limitBackPosition, setLimitBackPosition] = useState<number>(0)
  const [typed, setTypes] = useState<string>('')
  const [score, setScore] = useState({
    plays: 0,
    victories: 0
  })

  // Reset Game
  const resetGame = () => {
    setKeySelected('')
    setIndexPosition(0)
    setLimitBackPosition(0)
    setSlots(slotsMaped)
  }

  useEffect(() => {
    resetGame()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word])

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
            const { slotsUpdated } = deleteSlot({ slots, indexPosition })
            setSlots([...slotsUpdated])
            setIndexPosition((prev) => prev - 1)
          }

          setKeySelected(key)

          // Next Slot
          if (!wasBackspacePressed && !wasEnterPressed && indexPosition < slots.length) {
            const slotsUpdated = addSlot({ slots, indexPosition, key })
            setSlots([...slotsUpdated])
            setIndexPosition((prev) => prev + 1)

            if (currentSlot?.position === columnsQuantity) {
              setLimitBackPosition(limitBackPosition + columnsQuantity)
              // Validate Slots
              const slotsValidated = validateSlots({ slots: slotsUpdated, wordMaped })
              setSlots([...slotsValidated])

              const valuesInRange = slotsValidated.slice(limitBackPosition, columnsQuantity + limitBackPosition).map(({ value }) => value)
              const concatenatedValue = valuesInRange.join('')
              const isMatch = concatenatedValue === word
              if (isMatch) {
                setScore((prev) => ({
                  ...prev,
                  victories: prev.victories + 1
                }))
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
  }, [columnsQuantity, indexPosition, keySelected, limitBackPosition, slots, wordMaped, isGameStarted, word, typed, resetGame])

  useEffect(() => {
    // Game Finished
    const slotsSolved = !slots.some(({ status }) => status === STATUS.EMPTY)

    if (slotsSolved) {
      setScore((prev) => ({
        ...prev,
        plays: prev.plays + 1
      }))
    }
  }, [slots])

  useEffect(() => {
    const wasEnterPressed = keySelected === ENTER_KEY
    const wasBackspacePressed = keySelected === BACKSPACE_KEY
    if (!wasBackspacePressed && !wasEnterPressed) {
      setTypes((prev) => prev + keySelected)
    }
  }, [keySelected])

  return { slots, columnsQuantity, keySelected, score, resetGame }
}
