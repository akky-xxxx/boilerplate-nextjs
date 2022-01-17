import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("「Welcome to」が表示される", () => {
  render(<Default />)
  expect(screen.getByText("Welcome to")).toBeTruthy()
})
