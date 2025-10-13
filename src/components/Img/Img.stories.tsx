import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: '/Image.jpg',
    alt: 'Sample Image',
    width: '300px',
    height: '200px',
  },
};

export const Disabled: Story = {
  args: {
    src: '/Image.jpg',
    alt: 'Disabled Image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};
