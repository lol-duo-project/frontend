import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DuoTableBody } from './DuoTableBody';

const story = {
  title: 'organisms/table/DuoTableBody',
  component: DuoTableBody,
} as ComponentMeta<typeof DuoTableBody>;

const Template: ComponentStory<typeof DuoTableBody> = args => <DuoTableBody />;

export const Default = Template.bind({});
Default.args = {};

export default story;
