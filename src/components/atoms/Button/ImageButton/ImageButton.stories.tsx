import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageButton } from '.';

export default {
  title: 'atoms/button/ImageButton',
  component: ImageButton,
  argTypes: {
    src: String,
    width: Number,
    height: Number,
    alt: String,
    buttonType: { control: 'select', option: ['button', 'submit', 'reset', undefined] },
  },
} as ComponentMeta<typeof ImageButton>;

const Template: ComponentStory<typeof ImageButton> = args => <ImageButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: '/images/svg/SearchButton.svg',
  width: 15,
  height: 16,
  alt: '검색하기 버튼',
  buttonType: 'button',
};
