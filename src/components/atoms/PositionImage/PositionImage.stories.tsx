import { ComponentMeta, ComponentStory } from "@storybook/react"
import { PositionImage } from "./PositionImage"

const story = {
  title: 'atoms/image/PositionImage',
  component: PositionImage
} as ComponentMeta<typeof PositionImage>;

const Template: ComponentStory<typeof PositionImage> = args => <PositionImage {...args} />;

export const Default = Template.bind({});

export default story;