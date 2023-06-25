import { GAME_CONFIG } from '@/constants/gameConfig'
import { useEffect, useState } from 'react'

export const useRandomWord = () => {
  const [words, setWords] = useState<string[]>([])
  const [randomWord, setRandomWord] = useState<string>('')

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

  return {
    randomWord
  }
}
