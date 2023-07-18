import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledInput, ControlledCheckbox } from '../../ui/controlled'

type Form = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<Form>()

  const onSubmitHandler = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmitHandler}>
      <ControlledInput label={'first name'} name={'login'} control={control} />
      <ControlledInput label={'last name'} name={'password'} control={control} />
      <ControlledCheckbox name={'rememberMe'} control={control} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
