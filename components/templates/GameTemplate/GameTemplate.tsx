'use client'
import Game from '@/components/organisms/Game/Game'
import Header from '@/components/organisms/Header/Header'
import StatisticsModal from '@/components/organisms/StatisticsModal/StatisticsModal'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'
import { WordleContext } from '@/context/WordleContext'
import { useContext, useEffect, useState } from 'react'

const GameTemplate = () => {
  const { slots, columnsQuantity, score, setIsGameStarted } = useContext(WordleContext)
  const [tutorialIsOpen, setTutorialIsOpen] = useState(false)
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false)

  // Open Statistics Modal every time that game finish
  useEffect(() => {
    if (score.plays > 0) {
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

      {statisticsIsOpen
        ? <StatisticsModal
            setIsOpen={setStatisticsIsOpen}
            isOpen={statisticsIsOpen}
          />
        : null}

      {slots.length && columnsQuantity
        ? <Game
            columnsQuantity={columnsQuantity}
            slots={slots}
          />
        : null}
    </>
  )
}

export default GameTemplate
