import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode,
  className?: string,
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  size?: 'xs' | 'sm' | 'md' | 'lg'
}
