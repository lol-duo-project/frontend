import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TabBar } from '.';

export default {
  title: 'TabBar',
  component: TabBar,
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = args => <TabBar />;

export const Default = Template.bind({});
