import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components';

const meta = {
  title: 'Example/Input/TextArea',
  component: TextArea,
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
