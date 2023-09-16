import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Terça-Feira, <span>22 de outubro</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
            <TimePickerItem>9:00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
