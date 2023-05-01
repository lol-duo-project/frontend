import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Background } from "./Background";

const story = {
  title: 'atoms/background/background',
  component: Background
} as ComponentMeta<typeof Background>;

const Template : ComponentStory<typeof Background> = args => <Background {...args} />;

export const Default = Template.bind({});

export default story;