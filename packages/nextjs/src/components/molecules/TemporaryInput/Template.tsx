import { VFC } from "react"
import { TemporaryInputProps } from "./types"

export const Template: VFC<TemporaryInputProps> = (props) => {
  const { isChecked, handleToggleChecked } = props
  return (
    <div>
      <label>
        ラベルテキスト
        <input type="checkbox" checked={isChecked} onChange={handleToggleChecked}/>
      </label>
    </div>
  )
}
