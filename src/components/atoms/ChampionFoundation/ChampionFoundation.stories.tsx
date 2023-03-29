import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChampionFoundation } from '.';

export default {
  title: 'atoms/champion/Foundation',
  component: ChampionFoundation,
  argTypes: {
    name: String,
    url: String,
  },
} as ComponentMeta<typeof ChampionFoundation>;

const Template: ComponentStory<typeof ChampionFoundation> = args => <ChampionFoundation {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Aatrox',
  url: 'https://lolduo-static-img.s3.ap-northeast-2.amazonaws.com/champion/Aatrox.svg',
};
