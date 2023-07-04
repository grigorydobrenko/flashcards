import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

interface TypographyProps<T extends ElementType> {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  className?: string
  children?: ReactNode
}

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  variant = 'body1',
  className,
  ...restProps
}: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const Component = as || 'p'

  const classNames = clsx(s.typography, s[variant], className)

  return (
    <Component className={classNames} {...restProps}>
      {children}
    </Component>
  )
}
