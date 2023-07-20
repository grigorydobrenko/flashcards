import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  login: z.string().trim().nonempty('EnterLogin').min(3, 'Login must be at least 3 characters'),
  password: z
    .string()
    .trim()
    .nonempty('EnterPassword')
    .min(8, 'Password must be at least 8 characters'),
  email: z.string().trim().email('Invalid email').nonempty('Enter email'),
  rememberMe: z.boolean().optional(),
})

type Form = z.infer<typeof schema>

export const useLoginForm = (onSubmit: any) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
