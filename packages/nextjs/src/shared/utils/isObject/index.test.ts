import { isObject } from "."

describe("utils/isObject", () => {
  it("{} を渡すと true を返す", () => {
    expect(isObject({})).toBe(true)
  })

  // テスト向けのため一旦全てのルール除外
  /* eslint-disable no-magic-numbers, @typescript-eslint/no-empty-function, func-names, prefer-regex-literals, no-undefined */
  const testCases = [
    [],
    123,
    0,
    "123",
    "",
    () => {},
    function () {},
    /test/,
    new RegExp(""),
    null,
    undefined,
    true,
    false,
  ] as const
  /* eslint-enable */
  it.each(testCases)("%s を渡すと false を返す", (argument) => {
    expect(isObject(argument)).toBe(false)
  })
})
