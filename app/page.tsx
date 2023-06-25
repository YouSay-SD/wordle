'use client'
import GameTemplate from '@/components/templates/GameTemplate/GameTemplate'
import { ThemeProvider } from 'next-themes'

export default function Home () {
  return (
    <main>
      <ThemeProvider defaultTheme='light'>
        <GameTemplate />
      </ThemeProvider>
    </main>
  )
}
