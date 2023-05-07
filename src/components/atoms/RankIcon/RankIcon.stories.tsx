import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RankIcon } from "./RankIcon";

const story = {
  title: 'atoms/icon/RankIcon',
  component: RankIcon
} as ComponentMeta<typeof RankIcon>;

const Template: ComponentStory<typeof RankIcon> = args => <RankIcon {...args} />;

export const FirstPlace = Template.bind({});
FirstPlace.args = {
  rankNumber: 1
}

export const SecondPlace = Template.bind({});
SecondPlace.args = {
  rankNumber: 2
}
export const ThridPlace = Template.bind({});
ThridPlace.args = {
  rankNumber: 3
}

export default story;

