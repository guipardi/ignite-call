import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import PreviewImage from '../../assets/app-preview.png'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamento no
          seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={PreviewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
