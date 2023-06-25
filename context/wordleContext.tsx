'use client'
import { actionAddSlot } from '@/helpers/addSlot'
import { actionRemoveSlot } from '@/helpers/deleteSlot'
import { actionValidateSlots } from '@/helpers/validateSlots'
import { useCreateSlots } from '@/hooks/useCreateSlots'
import { useRandomWord } from '@/hooks/useRandomWord'
import { createContext, useContext, useState } from 'react'

const initialState = {
  slots: []
}

export const WordleContext = createContext(initialState)

export const useWordle = () => {
  const context = useContext(WordleContext)
  if (context) {
    return context
  }
}

export const WordleProvider = ({ children }) => {
  const { randomWord, timeRemaining } = useRandomWord()
  const columnsQuantity = randomWord.length
  const wordMaped = randomWord.split('')
  const { slotsMaped } = useCreateSlots({ columnsQuantity })
  const [indexPosition, setIndexPosition] = useState<number>(0)
  const [limitBackPosition, setLimitBackPosition] = useState<number>(0)
  const [slots, setSlots] = useState(slotsMaped)
  const [score, setScore] = useState({
    plays: 0,
    victories: 0
  })

  // Validate Slots
  const validateSlots = () => {
    const slotsValidated = actionValidateSlots({ slots, wordMaped })
    setSlots([...slotsValidated])
  }

  // Remove Slot
  const removeSlot = () => {
    const slotsRemoved = actionRemoveSlot({ slots, indexPosition })
    setSlots([...slotsRemoved])
  }

  // Add Slot
  const addSlot = ({ key }) => {
    console.log('ADD')
    const slotsAdded = actionAddSlot({ slots, indexPosition, key })
    console.log('slotsAdded', slotsAdded)
    setSlots([...slotsAdded])
  }

  // Victory
  const victory = () => {
    setScore((prev) => ({
      ...prev,
      victories: prev.victories + 1
    }))
  }

  // Plays
  const plays = () => {
    setScore((prev) => ({
      ...prev,
      plays: prev.plays + 1
    }))
  }

  // Reset Game
  const resetGame = () => {
    setIndexPosition(0)
    setLimitBackPosition(0)
    setSlots(slotsMaped)
  }

  return (
    <WordleContext.Provider value={{
      slots,
      score,
      wordMaped,
      timeRemaining,
      indexPosition,
      limitBackPosition,
      columnsQuantity,
      setLimitBackPosition,
      setIndexPosition,
      resetGame,
      validateSlots,
      removeSlot,
      addSlot,
      victory,
      plays
    }}
    >
      {children}
    </WordleContext.Provider>
  )
}
