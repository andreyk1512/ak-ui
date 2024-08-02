import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as EyeSVG } from '../../../assets/icons/eye.svg';
import { Input } from '../Input';

const meta = {
  title: 'Example/Input/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSuffixIcon: Story = {
  args: {
    suffixIcon: <EyeSVG />,
  },
};
