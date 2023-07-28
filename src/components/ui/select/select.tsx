import { FC } from 'react'

import * as Label from '@radix-ui/react-label'
import * as Listbox from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ShevronDown } from '../../../assets/icons'

import s from './select.module.scss'

type Option = {
  label: string
  value: string
}

interface ListboxProps {
  className?: string
  options: Option[]
  label?: string
  disabled?: boolean
}

export const Select: FC<ListboxProps> = ({ className, options, disabled = false, label = '' }) => {
  const classNames = {
    root: clsx(className, s.root),
  }

  return (
    <div className={classNames.root}>
      <Label.Root>
        <label className={s.label}>{label}</label>
        <Listbox.Root defaultValue={options[0].value} disabled={disabled}>
          <Listbox.Trigger className={s.selectTrigger}>
            <Listbox.Value />
            <Listbox.Icon className={s.selectIcon}>
              <ShevronDown />
            </Listbox.Icon>
          </Listbox.Trigger>

          <Listbox.Portal>
            <Listbox.Content className={s.selectContent} position="popper">
              <Listbox.ScrollUpButton />
              <Listbox.Viewport>
                {options.map(({ value, label }) => {
                  return (
                    <Listbox.Item key={value} value={value} className={s.item}>
                      <Listbox.ItemText>{label}</Listbox.ItemText>
                    </Listbox.Item>
                  )
                })}
              </Listbox.Viewport>
              <Listbox.ScrollDownButton />
              <Listbox.Arrow />
            </Listbox.Content>
          </Listbox.Portal>
        </Listbox.Root>
      </Label.Root>
    </div>
  )
}
