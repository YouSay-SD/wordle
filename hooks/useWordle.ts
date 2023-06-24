import { useEffect, useState } from 'react'
import { useCreateSlots } from './useCreateSlots'
import { BACKSPACE_KEY, ENTER_KEY, KEYBOARD_SET } from '@/constants/keyboardSet'
import { deleteSlot } from '@/helpers/deleteSlot'
import { addSlot } from '@/helpers/addSlot'
import { validateSlots } from '@/helpers/validateSlots'

export interface UseWordleProps {
  word: string,
  isGameStarted: boolean
}

export const useWordle = ({ word, isGameStarted }: UseWordleProps) => {
  const wordMaped = word.split('')
  const columnsQuantity = word.length
  const { slotsMaped } = useCreateSlots({ columnsQuantity })
  const [slots, setSlots] = useState(slotsMaped)
  const [keySelected, setKeySelected] = useState<string>('')
  const [indexPosition, setIndexPosition] = useState<number>(0)
  const [limitBackPosition, setLimitBackPosition] = useState<number>(0)

  // Reset Game
  const resetGame = () => {
    setKeySelected('')
    setIndexPosition(0)
    setLimitBackPosition(0)
    setSlots(slotsMaped)
  }

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
            const { slotsUpdated } = addSlot({ slots, indexPosition, key })
            setSlots([...slotsUpdated])
            setIndexPosition((prev) => prev + 1)

            if (currentSlot?.position === columnsQuantity) {
              setLimitBackPosition(limitBackPosition + columnsQuantity)
              const { slotsValidated } = validateSlots({ slots: slotsUpdated, key, wordMaped })
              setSlots([...slotsValidated])
            }
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyPress)
    return () => {
      window.removeEventListener('keydown', onKeyPress)
    }
  }, [columnsQuantity, indexPosition, keySelected, limitBackPosition, slots, wordMaped, isGameStarted])

  return { slots, resetGame, columnsQuantity, keySelected }
}
