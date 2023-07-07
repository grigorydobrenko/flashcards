import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

interface CardProps {
  children?: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  const classNames = {
    container: clsx(s.container, className),
  }

  return (
    <div className={classNames.container}>
      <div>{children}</div>
    </div>
  )
}
