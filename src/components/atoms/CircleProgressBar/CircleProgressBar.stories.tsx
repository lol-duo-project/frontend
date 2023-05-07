import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircleProgressBar } from "./CircleProgressBar";

const story = {
  title: 'atoms/progressBar/CircleProgressBar',
  component: CircleProgressBar
} as ComponentMeta<typeof CircleProgressBar>;

const Template: ComponentStory<typeof CircleProgressBar> = args => <CircleProgressBar/>;

export const Default = Template.bind({});

export default story;

