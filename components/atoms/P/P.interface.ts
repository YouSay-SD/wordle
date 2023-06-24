import { ReactNode } from 'react'

export interface PProps {
  children: ReactNode,
  className?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg'
}
