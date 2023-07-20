import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { Input, InputProps } from '../input'

// type _Props<T extends FieldValues> = {
//   control: Control<T>
//   name: FieldPath<T>
// } & Omit<InputProps, 'onChange' | 'value'>

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValues'> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({ name, control, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return <Input {...field} {...rest} errorMessage={error?.message} />
}
