import { VFC } from "react"
import { Template } from "./Template"
import { HoCTestProps } from "./types"
import { useTest } from "./modules/useTest"

export const Test: VFC<HoCTestProps> = (props) => {
  const dependencies = useTest(props)
  return <Template {...dependencies} />
}
