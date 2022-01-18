import { VFC } from "react"
import { TestProps } from "./types"

export const Template: VFC<TestProps> = (props) => {
  const { test2 } = props
  return <div>{test2}</div>
}
