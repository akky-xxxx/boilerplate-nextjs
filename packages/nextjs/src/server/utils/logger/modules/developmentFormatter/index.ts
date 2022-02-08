import { format } from "winston"

const { printf } = format

// 第一引数を指定。実装で lint error を回避できないため
// eslint-disable-next-line no-magic-numbers
type DevelopmentFormatter = Parameters<typeof printf>[0]

/**
 * @description 開発ビルド時用のログ出力内容のフォーマッター
 * @param info
 */
export const developmentFormatter: DevelopmentFormatter = (info) => {
  const { level, message, timestamp, traceId, userId } = info

  return [
    `${level}:`,
    // message は object の可能性もありえるが、型でそう定義されてない
    typeof message === "string" ? message : JSON.stringify(message),
    "by",
    userId,
    typeof traceId === "string" && `(${traceId})`,
    typeof timestamp === "string" && `@${timestamp}`,
  ]
    .filter(Boolean)
    .join(" ")
}
