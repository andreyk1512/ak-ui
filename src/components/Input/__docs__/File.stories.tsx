import type { Meta, StoryObj } from '@storybook/react';
import { File } from '../components';

const meta = {
  title: 'Example/Input/File',
  component: File,
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
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'select file',
  },
};
