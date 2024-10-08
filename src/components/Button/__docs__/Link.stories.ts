import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components';

const meta = {
  title: 'Example/Button/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      required: true,
      control: 'text',
    },
    href: {
      required: true,
      control: 'text',
    },
    target: {
      required: false,
      control: 'radio',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a Link to Google",
    href: "https://google.com/",
    target: "_blank",
  },
};

export const Disabled: Story = {
  args: {
    children: "This is a disabled Link to Google",
    href: "https://google.com/",
    target: "_blank",
    disabled: true,
  },
};
