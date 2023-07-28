import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './select.tsx'

const meta: Meta<typeof Select> = {
  title: 'Components/Listbox',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

const options = [
  { label: 'France', value: 'france' },
  { label: 'United Kingdom', value: 'united kingdom' },
]

export const Default: Story = {
  args: {
    options,
    label: 'Countries',
  },
}
