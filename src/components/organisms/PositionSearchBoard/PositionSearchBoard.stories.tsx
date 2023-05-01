import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PositionSearchBoard } from "./PositionSearchBoard";

const story = {
  title: 'organisms/board/PositionSearchBoard',
  component: PositionSearchBoard
} as ComponentMeta<typeof PositionSearchBoard>;

const Template: ComponentStory<typeof PositionSearchBoard> = args => <PositionSearchBoard {...args} />;

export const Default = Template.bind({});

export default story;

