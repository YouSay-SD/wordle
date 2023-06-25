import { WordleContext } from '@/context/WordleContext'
import { initialState } from '@/context/WordleContext.initial'
import { WordleContextProps } from '@/context/WordleContext.interface'
import { useContext } from 'react'

export const useWordle = (): WordleContextProps => {
  const context = useContext(WordleContext)
  if (context) {
    return context
  } else {
    return { ...initialState }
  }
}
