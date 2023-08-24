import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'
import { set, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError } from '../home/components/ClaimUsernameForm/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/src/lib/axios'
import { AxiosError } from 'axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O nome de usuário deve ter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário precisa ter apenas letras e números',
    })
    .transform((username) => username.toLowerCase()),

  name: z
    .string()
    .min(4, { message: 'O nome precisa ter mais de 4 caracteres' })
    .regex(/^([a-zA-Z\s]+)$/, {
      message: 'O nome deve ser composto apenas por letras',
    })
    .transform((name) => name.toLowerCase()),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err?.response?.data?.message)
        return
      }

      console.log(err)
    }
  }

  return (
    <Container>
      <Header>
        <Heading>Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1}></MultiStep>
      </Header>
      <Form as={'form'} onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size={'sm'}>Nome de usuário</Text>
          <TextInput
            crossOrigin={undefined}
            prefix="cal.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text size={'sm'}>Nome completo</Text>
          <TextInput
            crossOrigin={undefined}
            placeholder="Nome completo"
            {...register('name')}
          />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>
        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
