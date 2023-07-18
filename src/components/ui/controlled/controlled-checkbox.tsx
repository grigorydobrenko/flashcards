import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

import { CheckboxProps, Checkbox } from '../checkbox'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValues'> &
  Omit<CheckboxProps, 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, shouldUnregister })

  return <Checkbox checked={value} onChange={onChange} {...rest} />
}
