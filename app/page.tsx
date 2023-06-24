// import Image from 'next/image'

import Container from '@/components/atoms/Container/Container'
import Heading from '@/components/atoms/Heading/Heading'
import GameTemplate from '@/components/templates/GameTemplate/GameTemplate'

export default function Home () {
  return (
    <main>
      <Container>
        <Heading>Hi there!</Heading>
        <GameTemplate />
      </Container>
    </main>
  )
}
