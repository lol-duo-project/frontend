import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SearchBar/SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: String,
    height: String,
    placeholder: String,
    fontColor: { control: 'select', options: ['Black', 'White'] },
  },
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = args => <SearchBar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: '100px',
  height: '33px',
  placeholder: '찾으시는 챔피언 이름을 입력해주세요.',
  fontColor: 'Black',
};
