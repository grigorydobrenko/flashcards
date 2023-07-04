import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typography>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'h3',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle2',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline',
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Link1',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Link2',
  },
}
