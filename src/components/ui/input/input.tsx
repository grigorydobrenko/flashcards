import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { Eye, EyeOff, Search, Close } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './input.module.scss'

export interface InputProps extends ComponentProps<'input'> {
  label?: string
  errorMessage?: string
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, errorMessage, className, type, ...restProps }, ref) => {
    const [ShowPassword, setShowPassword] = useState(false)
    const [inputValue, setInputValue] = useState(value)

    const isTypePassword = type === 'password'
    const isTypeSearch = type === 'search'

    const typeInput = getTypeInput(type, ShowPassword)

    // if (isTypeSearch) {
    //   iconStart = <Search />
    // }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
    }

    const handleButtonCloseClick = () => {
      setInputValue('')
    }

    const handleButtonVisibleClick = () => {
      setShowPassword(prevState => !prevState)
    }

    return (
      <div>
        {label && !isTypeSearch && (
          <Typography as="label" variant={'body2'}>
            {label}
          </Typography>
        )}
        <div>
          {isTypeSearch && <Search />}
          <input
            type={typeInput}
            value={inputValue}
            className={s.field}
            ref={ref}
            onChange={handleInputChange}
            {...restProps}
          />
          {isTypePassword && (
            <button onClick={handleButtonVisibleClick}>
              {ShowPassword ? <EyeOff /> : <Eye />}
            </button>
          )}
          {isTypeSearch && (
            <button onClick={handleButtonCloseClick}>
              <Close />
            </button>
          )}
        </div>

        {errorMessage && (
          <Typography variant={'caption'} as={'span'}>
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
