// import Image from 'next/image'

import Container from '@/components/atoms/Container/Container'
import Heading from '@/components/atoms/Heading/Heading'
import Game from '@/components/organisms/Game/Game'

export default function Home () {
  return (
    <main>
      <Container>
        <Heading>Hi there!</Heading>
        <Game />
      </Container>
    </main>
  )
}
