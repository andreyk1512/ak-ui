import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '../components';

const meta = {
  title: 'Example/Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      required: true,
      control: 'text',
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
