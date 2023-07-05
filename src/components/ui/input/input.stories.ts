import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input.tsx'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
  },
}
export const Password: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
    type: 'search',
  },
}

export const Error: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
    errorMessage: 'Error!',
  },
}
