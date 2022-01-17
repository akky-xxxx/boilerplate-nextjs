import { ComponentStoryObj, Meta } from "@storybook/react"
// import { within } from "@storybook/testing-library"
import { HomeTemplate } from "./index"

type HomeTemplateType = typeof HomeTemplate

const meta: Meta = {
  component: HomeTemplate,
}

export default meta

export const Default: ComponentStoryObj<HomeTemplateType> = {}
