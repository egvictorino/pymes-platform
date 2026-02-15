import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'bare', 'soul'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Secondary',
  },
};

export const Bare: Story = {
  args: {
    variant: 'bare',
    children: 'Button Bare',
  },
};

export const Soul: Story = {
  args: {
    variant: 'soul',
    children: 'Button Soul',
  },
};
