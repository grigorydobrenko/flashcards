import { FC, useState } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import { Check } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  className?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  checked: propChecked,
  disabled,
  required,
  label,
  id,
  className,
}) => {
  const [checked, setChecked] = useState(propChecked)

  const classNames = {
    container: clsx(className),
    root: clsx(s.root, checked && s.checked),
    checkDisabled: clsx(disabled && s.checkDisabled),
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <Typography variant="body2" className={classNames.label} as={'label'}>
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            id={id}
            required={required}
            checked={checked}
            disabled={disabled}
            onCheckedChange={() => setChecked(prevState => !prevState)}
            className={classNames.root}
          >
            <RadixCheckbox.Indicator>
              {checked && <Check isDisabled={disabled ?? false} />}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
