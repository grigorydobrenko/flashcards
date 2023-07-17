import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { ControlledInput } from '../../ui/controlled'

export const LoginForm = () => {
  const { control, handleSubmit } = useForm()

  const onSubmitHandler = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmitHandler}>
      <ControlledInput label={'first name'} name={'login'} control={control} />
      <ControlledInput label={'last name'} name={'password'} control={control} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
