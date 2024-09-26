import type { Meta, StoryObj } from '@storybook/react';

import Home from './home';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  args: {
    title: 'title default',
    description: 'description default'
  }
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Basic: Story = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
};
