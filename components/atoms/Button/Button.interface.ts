import { MouseEventHandler } from 'react'

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string,
  buttonText: string,
  adaText: string
}
