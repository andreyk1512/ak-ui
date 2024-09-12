import type { Meta, StoryObj } from '@storybook/react';
import { Password } from '../components';

const meta = {
  title: 'Example/Input/Password',
  component: Password,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      required: false,
      control: 'text',
    },
  },
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
