import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { useTemporaryInput } from "."

describe("useTemporaryInput", () => {
  let renderHookResult: RenderHookResult<undefined, ReturnType<typeof useTemporaryInput>>

  beforeEach(() => {
    renderHookResult = renderHook(() => useTemporaryInput())
  })

  it("isChecked の初期値は false", () => {
    expect(renderHookResult.result.current.isChecked).toEqual(false)
  })
  it("handleToggleChecked を1回実行すると isChecked は true になる", () => {
    act(() => {
      renderHookResult.result.current.handleToggleChecked()
    })
    expect(renderHookResult.result.current.isChecked).toEqual(true)
  })
  it("handleToggleChecked を2回実行すると isChecked は false になる", () => {
    act(() => {
      renderHookResult.result.current.handleToggleChecked()
    })
    expect(renderHookResult.result.current.isChecked).toEqual(true)
    act(() => {
      renderHookResult.result.current.handleToggleChecked()
    })
    expect(renderHookResult.result.current.isChecked).toEqual(false)
  })
})
