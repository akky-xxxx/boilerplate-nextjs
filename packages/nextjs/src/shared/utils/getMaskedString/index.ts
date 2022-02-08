type GetMaskedString = (originString: string) => string

/**
 * @description ロギング時のマスキング処理
 * @param originString {string} - masking する文字列
 * @return {string} - masking された文字列
 */
export const getMaskedString: GetMaskedString = (originString) =>
  "*".repeat(originString.length)
