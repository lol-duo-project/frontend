import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChampionSearchBoard } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Champion/Board',
  component: ChampionSearchBoard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   id: Number
  // },
} as ComponentMeta<typeof ChampionSearchBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChampionSearchBoard> = args => <ChampionSearchBoard />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// DefaultBoard.args = {
//   id: 1
// };
