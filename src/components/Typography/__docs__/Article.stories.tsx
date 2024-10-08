import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';

const meta = {
  title: 'Example/Typography/Article',
  component: Typography,
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
    children: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Typography>
    ),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
