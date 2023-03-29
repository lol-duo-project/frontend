import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChampionSearchBoard } from '.';

export default {
  title: 'organisms/champion/Board',
  component: ChampionSearchBoard,
} as ComponentMeta<typeof ChampionSearchBoard>;

const Template: ComponentStory<typeof ChampionSearchBoard> = args => <ChampionSearchBoard />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    locale: 'ko_KR',
  },
};
