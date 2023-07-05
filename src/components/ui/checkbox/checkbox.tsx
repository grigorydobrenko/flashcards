import { FC, useState } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import { Check } from '../../../assets/icons'

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

export const Checkbox: FC<CheckboxProps> = ({ className }) => {
  //     {
  //   checked,
  //   onChange,
  //   disabled,
  //   required,
  //   label,
  //   id,
  // }

  const disabled = false

  const [checked, setChecked] = useState(false)

  const classNames = {
    root: clsx(s.root, checked && s.checked, className),
    checkDisabled: clsx(disabled && s.checkDisabled),
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
  }

  return (
    <div>
      <div className={classNames.checkboxWrapper}>
        <RadixCheckbox.Root
          checked={checked}
          disabled={disabled}
          onCheckedChange={() => setChecked(prevState => !prevState)}
          className={classNames.root}
        >
          <RadixCheckbox.Indicator>
            {checked && <Check isDisabled={disabled} />}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
    </div>
  )
}
