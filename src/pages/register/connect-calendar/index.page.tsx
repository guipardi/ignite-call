import { Box, Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ConnectBox, Container, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function ConnectCalendar() {
  return (
    <Container>
      <Header>
        <Heading>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <Box as="form">
          <Text>Google Agenda</Text>
          <Button variant="secondary">
            Conectar
            <ArrowRight />
          </Button>
        </Box>
        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
