import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../Loader';

const meta = {
  title: 'Example/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
};
