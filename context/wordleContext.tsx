'use client'
import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { STATUS } from '@/constants/status'
import { actionAddSlot } from '@/helpers/addSlot'
import { actionRemoveSlot } from '@/helpers/deleteSlot'
import { actionValidateSlots } from '@/helpers/validateSlots'
import { useRandomWord } from '@/hooks/useRandomWord'
import { FC, createContext, useEffect, useState } from 'react'
import { ScoreProps, WordleContextProps, WordleProviderProps } from './WordleContext.interface'
import { initialState } from './WordleContext.initial'

export const WordleContext = createContext<WordleContextProps>(initialState)

export const WordleProvider: FC<WordleProviderProps> = ({ children }) => {
  const { randomWord, timeRemaining, formattedTime, slotsEmpty, setNewRandomWord } = useRandomWord()
  const columnsQuantity = randomWord?.length
  const wordMaped = randomWord?.split('')
  const [indexPosition, setIndexPosition] = useState<number>(initialState.indexPosition)
  const [limitBackPosition, setLimitBackPosition] = useState<number>(initialState.limitBackPosition)
  const [isGameStarted, setIsGameStarted] = useState<boolean>(initialState.isGameStarted)
  const [slots, setSlots] = useState<SlotProps[]>(slotsEmpty)
  const [score, setScore] = useState<ScoreProps>(initialState.score)
  console.log('score', score)
  // Is Game Started
  useEffect(() => {
    const gameStarted = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (gameStarted) {
      setIsGameStarted(true)
    }
  }, [])

  // Set Empty Slots every time a RandomWord is choised
  useEffect(() => {
    setSlots(slotsEmpty)
  }, [randomWord, slotsEmpty])

  // Time Ended, so reset game
  useEffect(() => {
    if (timeRemaining === 0) {
      resetGame()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining])

  // Validate Slots
  const validateSlots = ({ slots }: { slots: SlotProps[] }) => {
    const slotsValidated = actionValidateSlots({ slots, wordMaped })
    setSlots([...slotsValidated])
  }

  // Remove Slot
  const removeSlot = () => {
    const slotsRemoved = actionRemoveSlot({ slots, indexPosition })
    setSlots([...slotsRemoved])
    setIndexPosition((prev) => prev - 1)
  }

  // Add Slot
  const addSlot = ({ key }: { key: string}) => {
    const currentSlot = slots.find(({ index }) => index === indexPosition)
    // setCurrentSlot(slot)
    const slotsAdded = actionAddSlot({ slots, indexPosition, key })
    setSlots([...slotsAdded])
    setIndexPosition((prev) => prev + 1)

    // Validate Slots
    if (currentSlot?.position === columnsQuantity) {
      setLimitBackPosition((prev) => prev + columnsQuantity)
      validateSlots({ slots: slotsAdded })
      const valuesInRange = slotsAdded.slice(limitBackPosition, columnsQuantity + limitBackPosition).map(({ value }) => value)
      const concatenatedValue = valuesInRange.join('')
      const isMatch = concatenatedValue === randomWord

      // Match Ended
      if (isMatch) {
        victoryScore()
        resetGame()
      }
    }

    // Plays Count
    const slotsSolved = !slotsAdded.some(({ status }) => status === STATUS.EMPTY)
    if (slotsSolved) {
      resetGame()
    }
  }

  // Victory Score
  const victoryScore = () => {
    setScore((prev) => ({
      ...prev,
      victories: prev.victories + 1
    }))
  }

  // Plays Score
  const playsScore = () => {
    setScore((prev) => ({
      ...prev,
      plays: prev.plays + 1
    }))
  }

  // Reset Game
  const resetGame = () => {
    playsScore()
    setIndexPosition(0)
    setLimitBackPosition(0)
    setNewRandomWord()
  }

  return (
    <WordleContext.Provider value={{
      slots,
      setSlots,
      score,
      wordMaped,
      timeRemaining,
      formattedTime,
      indexPosition,
      limitBackPosition,
      columnsQuantity,
      isGameStarted,
      setIsGameStarted,
      setLimitBackPosition,
      setIndexPosition,
      resetGame,
      validateSlots,
      removeSlot,
      addSlot,
      victoryScore,
      playsScore
    }}
    >
      {children}
    </WordleContext.Provider>
  )
}
