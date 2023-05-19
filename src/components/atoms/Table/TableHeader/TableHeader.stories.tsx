import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableHeader } from '.';

const story = {
  title: 'atoms/table/TableHeader',
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = args => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Rank',
};

export default story;
