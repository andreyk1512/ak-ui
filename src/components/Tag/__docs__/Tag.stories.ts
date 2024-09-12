import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '../Tag';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'green',
    children: 'ONLINE',
  },
};
