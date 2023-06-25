'use client'
import Game from '@/components/organisms/Game/Game'
import Header from '@/components/organisms/Header/Header'
import StatisticsModal from '@/components/organisms/StatisticsModal/StatisticsModal'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'
import { KEY_LOCAL_STORAGE } from '@/constants/keyLocalStorage'
import { useRandomWord } from '@/hooks/useRandomWord'
import { useWordle } from '@/hooks/useWordle'
import { useEffect, useState } from 'react'

const GameTemplate = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const { randomWord, timeRemaining } = useRandomWord()
  const { slots, columnsQuantity, keySelected, score, resetGame } = useWordle({ word: randomWord, isGameStarted })
  const [tutorialIsOpen, setTutorialIsOpen] = useState(false)
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false)

  useEffect(() => {
    const gameStarted = Boolean(localStorage.getItem(KEY_LOCAL_STORAGE))
    if (gameStarted) {
      setIsGameStarted(true)
    }
  }, [])

  // Finish Game
  useEffect(() => {
    if (score.plays > 0 || score.victories > 0) {
      setStatisticsIsOpen(true)
    }
  }, [score])

  return (
    <>
      <Header
        setTutorialIsOpen={setTutorialIsOpen}
        setStatisticsIsOpen={setStatisticsIsOpen}
      />
      <TutorialModal
        setIsGameStarted={setIsGameStarted}
        setIsOpen={setTutorialIsOpen}
        isOpen={tutorialIsOpen}
      />
      <StatisticsModal
        timeRemaining={timeRemaining}
        score={score}
        setIsOpen={setStatisticsIsOpen}
        isOpen={statisticsIsOpen}
        resetGame={resetGame}
      />
      <Game
        columnsQuantity={columnsQuantity}
        keySelected={keySelected}
        slots={slots}
      />
    </>
  )
}

export default GameTemplate
