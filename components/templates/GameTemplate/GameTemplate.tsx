'use client'
import Game from '@/components/organisms/Game/Game'
import StatisticsModal from '@/components/organisms/StatisticsModal/StatisticsModal'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { useRandomWord } from '@/hooks/useRandomWord'
import { useWordle } from '@/hooks/useWordle'
import { useEffect, useState } from 'react'

const GameTemplate = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const { randomWord, timeRemaining } = useRandomWord()
  const { slots, columnsQuantity, keySelected, score } = useWordle({ word: randomWord, isGameStarted })

  useEffect(() => {
    const gameStarted = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (gameStarted) {
      setIsGameStarted(true)
    }
  }, [])

  return (
    <>
      <TutorialModal setIsGameStarted={setIsGameStarted} />
      <StatisticsModal timeRemaining={timeRemaining} score={score} />
      <Game columnsQuantity={columnsQuantity} keySelected={keySelected} slots={slots} />
    </>
  )
}

export default GameTemplate
