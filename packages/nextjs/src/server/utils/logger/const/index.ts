type Level = "debug" | "error" | "fatal" | "info" | "trace" | "warn"
type Color =
  | "black"
  | "blue"
  | "cyan"
  | "gray"
  | "green"
  | "grey"
  | "magenta"
  | "red"
  | "white"
  | "yellow"

export const Levels: Record<Level, number> = {
  debug: 4,
  error: 1,
  fatal: 0,
  info: 3,
  trace: 5,
  warn: 2,
} as const

export const Colors: Record<Level, Color> = {
  debug: "cyan",
  error: "magenta",
  fatal: "red",
  info: "blue",
  trace: "black",
  warn: "yellow",
} as const

export const AppInfo = {
  app: "app name", // TODO: 正式版に差し替える
  version: "app version", // TODO: env から取得する
} as const
