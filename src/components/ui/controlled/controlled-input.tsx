import { useController } from 'react-hook-form'

import { Input } from '../input'

export const ControlledInput = ({ name, control, ...rest }: any) => {
  const { field } = useController({ name, control })

  return <Input {...field} {...rest} />
}
