import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChampionSelectedWrapper } from "./ChampionSelectedWrapper";

const story = {
  title: 'organisms/champion/Test',
  component: ChampionSelectedWrapper
} as ComponentMeta<typeof ChampionSelectedWrapper>;

const Template: ComponentStory<typeof ChampionSelectedWrapper> = () => <ChampionSelectedWrapper />

export const Default = Template.bind({});

export default story;