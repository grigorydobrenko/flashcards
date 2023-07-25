import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

interface SelectProps {
  className?: string
}

export const Listbox = ({ className }: SelectProps) => {
  const classNames = {
    root: clsx(className, s.root),
  }

  return (
    <div className={classNames.root}>
      <Select.Root defaultValue={'france'}>
        <Select.Trigger className={s.SelectTrigger}>
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content position="popper" sideOffset={1}>
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Item value="france">
                <Select.ItemText>France</Select.ItemText>
                <Select.ItemIndicator>…</Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="united-kingdom">
                <Select.ItemText>United Kingdom</Select.ItemText>
                <Select.ItemIndicator>…</Select.ItemIndicator>
              </Select.Item>
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
