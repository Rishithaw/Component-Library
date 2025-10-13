import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'example',
    value: 'option1',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option 2',
    name: 'example',
    value: 'option2',
    disabled: true,
  },
};
