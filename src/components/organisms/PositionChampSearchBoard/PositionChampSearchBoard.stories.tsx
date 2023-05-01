import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PositionChampSearchBoard } from "./PositionChampSearchBoard";

const story = {
  title: 'organisms/champion/PositionChampSearchBoard',
  component: PositionChampSearchBoard
} as ComponentMeta<typeof PositionChampSearchBoard>;

const Template: ComponentStory<typeof PositionChampSearchBoard> = () => <PositionChampSearchBoard />;

export const Default = Template.bind({});

export default story;