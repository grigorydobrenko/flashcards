import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledInput, ControlledCheckbox } from '../../ui/controlled'
import { useLoginForm } from '../../ui/controlled/useLoginForm.ts'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

export const LoginForm = ({ onSubmit }: any) => {
  const { handleSubmit, control } = useLoginForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Login In
      </Typography>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledInput
          label={'Email'}
          name={'email'}
          control={control}
          containerProps={{ className: s.login }}
        />
        <ControlledInput
          type={'password'}
          label={'Password'}
          name={'password'}
          control={control}
          containerProps={{ className: s.login }}
        />
        <ControlledCheckbox
          label={'Remember Me'}
          name={'rememberMe'}
          control={control}
          className={s.rememberMe}
        />
        <Button type={'submit'} fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  )
}
