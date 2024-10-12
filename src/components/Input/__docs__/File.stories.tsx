import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { File as FileComponent, FileProps } from '../components';

const Component = (props: FileProps) => {
  const [value, setValue] = useState<File | null>(null);

  return (
    <FileComponent value={value} onChange={setValue} {...props} />
  );
};

const meta = {
  title: 'Example/Input/File',
  component: Component,
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
} satisfies Meta<typeof FileComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'select file',
  },
};
