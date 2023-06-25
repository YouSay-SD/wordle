import { GAME_CONFIG } from '@/constants/gameConfig'
import { useEffect, useState } from 'react'

export const useRandomWord = () => {
  const [words, setWords] = useState<string[]>([])
  const [randomWord, setRandomWord] = useState<string>('')
  const [timeRemaining, setTimeRemaining] = useState<number>(GAME_CONFIG.TIMER / 1000)

  useEffect(() => {
    const getWords = async () => {
      try {
        const response = await fetch('/words.txt')
        const textData = await response.text()
        const wordsArray = textData.split(/\r?\n/).map((word) => {
          const cleanedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          return cleanedWord
        })
        setWords(wordsArray)

        const randomIndex = Math.floor(Math.random() * wordsArray.length)
        const randomWord = wordsArray[randomIndex]
        setRandomWord(randomWord)
      } catch (error) {
        console.error('Error useRandomWord fetch', error)
      }
    }

    getWords()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length)
      const randomWord = words[randomIndex]
      setRandomWord(randomWord)
    }, GAME_CONFIG.TIMER)

    return () => {
      clearInterval(interval)
    }
  }, [words])

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
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  return {
    randomWord: 'yousay',
    timeRemaining: formattedTime
  }
}
