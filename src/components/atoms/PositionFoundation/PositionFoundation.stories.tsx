import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PositionFoundation } from "./PositionFoundation";

const story = {
  title: 'atoms/position/PositionFoundation',
  component: PositionFoundation
} as ComponentMeta<typeof PositionFoundation>;

const Template: ComponentStory<typeof PositionFoundation> = args => <PositionFoundation {...args} />;

export const Default = Template.bind({});

export default story;