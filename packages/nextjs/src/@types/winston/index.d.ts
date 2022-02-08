import winston, { LeveledLogMethod } from "winston"

declare module "winston" {
  // TODO: custom level method を型解決できるようになったらこの定義を削除
  // interface じゃないと上書きできない・・・？
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface Logger extends winston.Logger {
    fatal: LeveledLogMethod
    trace: LeveledLogMethod
  }
}
