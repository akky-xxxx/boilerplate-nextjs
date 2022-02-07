import { ComponentStoryObj, Meta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { HomeTemplate } from "./index"

type HomeTemplateType = typeof HomeTemplate

const meta: Meta = {
  component: HomeTemplate,
}

export default meta

export const Default: ComponentStoryObj<HomeTemplateType> = {}

export const CheckedCheckBox: ComponentStoryObj<HomeTemplateType> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText("ラベルテキスト"))
  },
}
