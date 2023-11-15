import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../Checkbox';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
      required: true,
    },
    value: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'clicked',
    },
  },
  args: {
    name: 'checkbox',
    label: 'CheckBox',
    value: false,
    disabled: false,
    onChange: () => null,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
