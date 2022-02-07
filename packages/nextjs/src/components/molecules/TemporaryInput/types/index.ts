/**
 * @type TemporaryInputProps
 * @description stateless component ( Template ) に渡す props
 * @property isChecked {boolean} - チェック済みか否か
 * @property handleToggleChecked {function} - チェックの状態を反転させる
 */
export type TemporaryInputProps = {
  isChecked: boolean
  handleToggleChecked: () => void
}
