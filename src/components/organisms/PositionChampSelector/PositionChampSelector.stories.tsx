import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PositionChampSelector } from "./PositionChampSelector";

const story = {
  title: 'organisms/champion/PositionChampSelector',
  component: PositionChampSelector
} as ComponentMeta<typeof PositionChampSelector>;

const Template : ComponentStory<typeof PositionChampSelector> = args => <PositionChampSelector {...args} />;

export const Default = Template.bind({});

export default story;