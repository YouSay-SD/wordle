'use client'
import Game from '@/components/organisms/Game/Game'
import StatisticsModal from '@/components/organisms/StatisticsModal/StatisticsModal'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { useEffect, useState } from 'react'

const GameTemplate = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const word = 'yousay'

  useEffect(() => {
    const gameStarted = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (gameStarted) {
      setIsGameStarted(true)
    }
  }, [])

  return (
    <>
      <TutorialModal setIsGameStarted={setIsGameStarted} />
      <StatisticsModal />
      <Game isGameStarted={isGameStarted} word={word} />
    </>
  )
}

export default GameTemplate
