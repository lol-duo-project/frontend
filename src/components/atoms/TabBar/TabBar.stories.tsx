import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TabBar } from '.';

const story = {
  title: 'atoms/TabBar',
  component: TabBar,
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = args => <TabBar />;

export const Default = Template.bind({});

export default story;