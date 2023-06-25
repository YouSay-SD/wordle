import { WordleContext } from '@/context/WordleContext'
import { useContext } from 'react'

export const useWordle = () => {
  const context = useContext(WordleContext)
  if (context) {
    return context
  }
}
