import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Template } from "./Template"

type TemporaryInputType = typeof Template

const meta: Meta<ComponentProps<typeof Template>> = {
  component: Template,
  args: {
    isChecked: false,
    handleToggleChecked: () => {
      /* 仮 */
    },
  },
}
export default meta

export const Default: ComponentStoryObj<TemporaryInputType> = {}

export const Checked: ComponentStoryObj<TemporaryInputType> = {
  args: {
    isChecked: true,
  },
}
