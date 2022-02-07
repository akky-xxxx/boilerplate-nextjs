import { VFC } from "react"
import { useTemporaryInput } from "./modules/useTemporaryInput"
import { Template } from "./Template"

export const TemporaryInput: VFC = () => {
  const dependencies = useTemporaryInput()
  return <Template {...dependencies} />
}
