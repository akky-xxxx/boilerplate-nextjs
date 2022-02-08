import { useState } from "react"
import { TemporaryInputProps } from "../../types"

type UseTemporaryInput = () => TemporaryInputProps

export const useTemporaryInput: UseTemporaryInput = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleToggleChecked = () => {
    setIsChecked(!isChecked)
  }
  return { handleToggleChecked, isChecked }
}
