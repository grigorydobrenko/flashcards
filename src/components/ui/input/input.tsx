import { ChangeEvent, ComponentProps, forwardRef, useState, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import { Close, Eye, EyeOff, Search } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './input.module.scss'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
  errorMessage?: string
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, containerProps, labelProps, value, errorMessage, className, type, ...restProps },
    ref
  ) => {
    const [ShowPassword, setShowPassword] = useState(false)
    const [inputValue, setInputValue] = useState(value)

    const isTypePassword = type === 'password'
    const isTypeSearch = type === 'search'

    const typeInput = getTypeInput(type, ShowPassword)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
    }

    const handleButtonCloseClick = () => {
      setInputValue('')
    }

    const handleButtonVisibleClick = () => {
      setShowPassword(prevState => !prevState)
    }

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, isTypeSearch && s.searchField, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
    }

    return (
      <div className={classNames.root}>
        {label && !isTypeSearch && (
          <Typography as="label" variant={'body2'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {isTypeSearch && <Search className={s.searchIcon} />}
          <input
            type={typeInput}
            value={inputValue}
            className={classNames.field}
            ref={ref}
            onChange={handleInputChange}
            {...restProps}
          />
          {isTypePassword && (
            <button onClick={handleButtonVisibleClick} className={s.handleIcon}>
              {ShowPassword ? <EyeOff /> : <Eye />}
            </button>
          )}
          {isTypeSearch && inputValue && (
            <button onClick={handleButtonCloseClick} className={s.handleIcon}>
              <Close />
            </button>
          )}
        </div>

        {errorMessage && (
          <Typography variant={'caption'} as={'span'} className={s.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

function getTypeInput(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
