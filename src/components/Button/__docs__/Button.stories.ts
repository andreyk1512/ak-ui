import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

const meta = {
  title: 'Example/Button/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
      defaultValue: 'default',
    },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      defaultValue: 'default',
    },
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
    },
    ghost: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    extraClass: {
      control: 'text',
    },
    htmlType: {
      control: 'radio',
      options: ['submit', 'reset', 'button'],
      defaultValue: 'button',
    },
    children: {
      required: true,
      control: 'text',
    },
  },
  args: {
    type: 'default',
    size: 'default',
    disabled: false,
    loading: false,
    ghost: false,
    extraClass: undefined,
    onClick: () => null,
    htmlType: undefined,
    children: 'Click Me',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const PrimaryGhost: Story = {
  args: {
    ghost: true,
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const WithLoading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
