import { getMaskedString } from "./index"

describe("utils/getMaskedString", () => {
  it.each([
    ["", ""],
    ["a", "*"],
    ["an", "**"],
    ["age", "***"],
    ["get_masked-string*", "******************"],
  ] as const)("引数が「%s」の時、「%s」を返す", (argument, expectedValue) => {
    expect(getMaskedString(argument)).toBe(expectedValue)
  })
})
