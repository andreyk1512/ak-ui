import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '../components';

const meta = {
  title: 'Example/Typography/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: [1, 2, 3, 4, 5],
      defaultValue: 1,
    },
    children: {
      required: true,
      control: 'text',
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header1: Story = {
  args: {
    type: 1,
  },
};

export const Header2: Story = {
  args: {
    type: 2,
  },
};

export const Header3: Story = {
  args: {
    type: 3,
  },
};

export const Header4: Story = {
  args: {
    type: 4,
  },
};

export const Header5: Story = {
  args: {
    type: 5,
  },
};
