import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox.tsx'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'label',
  },
}

export const Checked: Story = {
  args: {
    label: 'label',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'label',
    disabled: true,
  },
}
