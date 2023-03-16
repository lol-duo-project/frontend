import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextButton } from '.';

export default {
  title: 'Button/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = args => <TextButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  clickEnableWidth: 'auto',
  clickEnableHeight: 50,
  fontColor: 'black',
  isActive: false,
  onClick: () => {},
  text: 'Click Me',
};
