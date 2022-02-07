import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default, CheckedCheckBox } = composeStories(stories)

describe("HomePage", () => {
  it("「Welcome to」が表示される", () => {
    render(<Default />)
    expect(screen.getByText("Welcome to")).toBeTruthy()
  })

  it("ラベルをクリックしないと checkbox が uncheck のまま", async () => {
    const { container } = render(<Default />)
    await Default.play({ canvasElement: container })
    expect(screen.queryByLabelText<HTMLInputElement>("ラベルテキスト")?.checked).toBe(false)
  })

  it("ラベルをクリックすると checkbox が checked になる", async () => {
    const { container } = render(<CheckedCheckBox />)
    await CheckedCheckBox.play({ canvasElement: container })
    expect(screen.queryByLabelText<HTMLInputElement>("ラベルテキスト")?.checked).toBe(true)
  })
})
