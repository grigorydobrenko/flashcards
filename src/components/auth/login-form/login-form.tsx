import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { ControlledInput, ControlledCheckbox } from '../../ui/controlled'

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

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  console.log(errors)

  const onSubmitHandler = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmitHandler}>
      <ControlledInput label={'first name'} name={'login'} control={control} />
      <ControlledInput label={'last name'} name={'password'} control={control} />
      <ControlledInput label={'email'} name={'email'} control={control} />
      <ControlledCheckbox name={'rememberMe'} control={control} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
