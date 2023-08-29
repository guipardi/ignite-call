import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../connect-calendar/styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading>Quase lá!</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox></Checkbox>
              <Text>Segunda-Feira</Text>
            </IntervalDay>

            <IntervalInputs>
              <TextInput
                size="sm"
                type="time"
                step={60}
                crossOrigin={undefined}
              ></TextInput>
              <TextInput
                size="sm"
                type="time"
                step={60}
                crossOrigin={undefined}
              ></TextInput>
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox></Checkbox>
              <Text>Terça-Feira</Text>
            </IntervalDay>

            <IntervalInputs>
              <TextInput
                size="sm"
                type="time"
                step={60}
                crossOrigin={undefined}
              ></TextInput>
              <TextInput
                size="sm"
                type="time"
                step={60}
                crossOrigin={undefined}
              ></TextInput>
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
