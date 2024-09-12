import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '../Accordion';

const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      control: 'text',
    },
    title: {
      required: true,
      control: 'text',
    },
    children: {
      required: true,
      control: 'text',
    },
    defaultExpanded: {
      control: 'boolean',
    },
  },
  args: {
    id: undefined,
    defaultExpanded: undefined,
    title: 'Accordion Component',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExpandedByDefault: Story = {
  args: {
    defaultExpanded: true,
  },
};
