import { createLogger, format, transports } from "winston"
import { IsDevelopment } from "../../../../../shared/const/common"
import { Colors, Levels } from "../../const"
import { developmentFormatter } from "../developmentFormatter"
import { flattenInfo } from "../flattenInfo"

const { printf, json, combine, timestamp, prettyPrint, colorize } = format
const { Console } = transports
const developmentFormat = printf(developmentFormatter)
const productionFormat = json()

const formats = [
  // 日時フォーマットのため typo check 除外
  /* cspell:disable-next-line */
  timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSSZ" }),
  prettyPrint(),
  flattenInfo(),
]

if (IsDevelopment)
  formats.push(colorize({ all: IsDevelopment, colors: Colors }))
formats.push(IsDevelopment ? developmentFormat : productionFormat)

export const originLogger = createLogger({
  format: combine(...formats),
  level: "trace", // TODO: 環境変数で可変させる
  levels: Levels,
  transports: [new Console()],
})
