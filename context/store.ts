'use client'

import { SlotProps } from '@/components/atoms/Slot/Slot.interface'
import { createContext } from 'react'

// type DataType = {

// }

interface ContextProps {
  slots: SlotProps[],
  store: object,
}

const GlobalContext = createContext<ContextProps>({
  slots,
  store
})
