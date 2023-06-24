// import Image from 'next/image'

import Container from '@/components/atoms/Container/Container'
import Heading from '@/components/atoms/Heading/Heading'
import Game from '@/components/organisms/Game/Game'
import TutorialModal from '@/components/organisms/TutorialModal/TutorialModal'

export default function Home () {
  return (
    <main>
      <Container>
        <Heading>Hi there!</Heading>
        <TutorialModal />
        <Game />
      </Container>
    </main>
  )
}
