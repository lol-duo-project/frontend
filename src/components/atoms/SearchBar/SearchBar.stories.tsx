import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '.';

const story = {
  title: 'atoms/searchBar/SearchBar',
  component: SearchBar,
  argTypes: {
    width: String,
    height: String,
    placeholder: String,
    fontColor: { control: 'select', options: ['Black', 'White'] },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: '100px',
  height: '33px',
  placeholder: '찾으시는 챔피언 이름을 입력해주세요.',
  fontColor: 'Black',
};

export default story;