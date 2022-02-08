import { ComponentStoryObj, Meta } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { HomeTemplate } from "./index"

type HomeTemplateType = typeof HomeTemplate

const meta: Meta = {
  component: HomeTemplate,
}

export default meta

export const Default: ComponentStoryObj<HomeTemplateType> = {}

export const CheckedCheckBox: ComponentStoryObj<HomeTemplateType> = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByText("ラベルテキスト"))
  },
}
