import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'This is a sample text component.',
    color: '#000',
    size: '16px',
  },
};

export const Disabled: Story = {
  args: {
    content: 'This text is disabled.',
    disabled: true,
  },
};
