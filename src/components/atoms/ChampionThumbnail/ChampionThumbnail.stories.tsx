import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChampionThumbnail } from "./ChampionThumbnail"

const story = {
  title: 'atoms/thumbnail/ChampionThumbnail',
  component: ChampionThumbnail
} as ComponentMeta<typeof ChampionThumbnail>;

const Template: ComponentStory<typeof ChampionThumbnail> = args => <ChampionThumbnail {...args} />;

export const Default = Template.bind({});

export default story;