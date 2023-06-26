import { GAME_CONFIG } from '@/constants/gameConfig'
import { useEffect, useState } from 'react'
import { SlotProps, StatusProps } from '@/components/atoms/Slot/Slot.interface'
import { STATUS } from '@/constants/status'
import { formatTimer } from '@/helpers/formatTimer'
import { getRandomWord } from '@/helpers/getRandomWord'

export interface UseRandomWordProps {
  randomWord: string;
  formattedTime: string;
  timeRemaining: number;
  slotsEmpty: SlotProps[];
  setNewRandomWord: () => void;
}

export const useRandomWord = (): UseRandomWordProps => {
  const [words, setWords] = useState<string[]>([])
  const [randomWord, setRandomWord] = useState<string>('')
  const [timeRemaining, setTimeRemaining] = useState<number>(GAME_CONFIG.TIMER / 1000)
  const [slotsEmpty, setSlotsEmpty] = useState<SlotProps[]>([])

  // Create Slots Empty
  const createSlotsEmpty = ({ newRandomWord }: { newRandomWord: string }) => {
    if (newRandomWord) {
      const columnsQuantity = newRandomWord?.length
      const slotsQuantity = GAME_CONFIG.ROWS * columnsQuantity
      let position = 1
      let started = false

      const slotsMaped: SlotProps[] = new Array(slotsQuantity).fill('').map((_, index) => {
        const isAMultiple = position % columnsQuantity === 0
        if (isAMultiple) {
          position = 1
        }

        if (!isAMultiple && started) {
          position++
        }

        started = true
        return { index, value: '', position, status: STATUS.EMPTY as StatusProps }
      })

      setSlotsEmpty(slotsMaped)
    }
  }

  // Get Words
  useEffect(() => {
    const getWords = async () => {
      try {
        const response = await fetch('/words.txt')
        const textData = await response.text()
        const wordsArray = textData.split(/\r?\n/).map((word) => {
          const cleanedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          return cleanedWord
        })
        const wordsFiltered = wordsArray.filter((word) => word.length === GAME_CONFIG.ROWS)
        setWords(wordsFiltered)

        const randomIndex = Math.floor(Math.random() * wordsFiltered.length)
        const randomWord = wordsFiltered[randomIndex]
        setRandomWord(randomWord)
        createSlotsEmpty({ newRandomWord: randomWord })
      } catch (error) {
        console.error('Error useRandomWord fetch', error)
      }
    }

    getWords()
  }, [])

  const setNewRandomWord = () => {
    const newRandomWord = getRandomWord(words)
    setRandomWord(newRandomWord)
    createSlotsEmpty({ newRandomWord })
  }

  // Update Time Remaining
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
      setTimeRemaining(GAME_CONFIG.TIMER / 1000)
    }
  }, [randomWord])

  // Format timer
  const formattedTime = formatTimer(timeRemaining)

  return {
    randomWord,
    formattedTime,
    timeRemaining,
    setNewRandomWord,
    slotsEmpty
  }
}
