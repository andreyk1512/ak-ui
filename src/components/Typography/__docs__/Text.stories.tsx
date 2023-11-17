import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../components';

const meta = {
  title: 'Example/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      required: true,
      control: 'text',
    },
    type: {
      control: 'radio',
      options: ['default', 'secondary'],
      defaultValue: 'default',
    },
    strikethrough: {
      control: 'boolean',
    },
    bold: {
      control: 'boolean',
    },
    tiny: {
      control: 'boolean',
    },
  },
  args: {
    type: 'default',
    strikethrough: false,
    bold: false,
    tiny: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};

export const Strikethrough: Story = {
  args: {
    strikethrough: true,
  },
};

export const Bold: Story = {
  args: {
    bold: true,
  },
};

export const Tiny: Story = {
  args: {
    tiny: true,
  },
};
