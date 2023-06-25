'use client'
import Game from '@/components/organisms/Game/Game'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { useRandomWord } from '@/hooks/useRandomWord'
import { useEffect, useState } from 'react'

const GameTemplate = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const { randomWord } = useRandomWord()

  useEffect(() => {
    const gameStarted = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (gameStarted) {
      setIsGameStarted(true)
    }
  }, [])

  return (
    <>
      <TutorialModal setIsGameStarted={setIsGameStarted} />
      <Game isGameStarted={isGameStarted} word={randomWord} />
    </>
  )
}

export default GameTemplate
