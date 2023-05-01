import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RuneImage } from "./RuneImage";

const story = {
  title: 'atoms/image/RuneImage',
  component: RuneImage
} as ComponentMeta<typeof RuneImage>;

const Template: ComponentStory<typeof RuneImage> = args => <RuneImage {...args} />;

export const Default = Template.bind({});

export default story;