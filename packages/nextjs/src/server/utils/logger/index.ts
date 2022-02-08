import { UnknownObject } from "../../../shared/types"
import { getMaskedString } from "../../../shared/utils/getMaskedString"
import { AppInfo } from "./const"
import { originLogger } from "./modules/originLogger"

type Message = UnknownObject | string
type LoggerFormat = {
  app: string
  version: string
  traceId: string
  userId: string
  message: Message
}
type LoggerInfo = Pick<LoggerFormat, "message" | "traceId" | "userId">
type Logger = (loggerInfo: LoggerInfo) => void

export const fatalLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.fatal(log)
}

export const errorLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.error(log)
}

export const warnLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.warn(log)
}

export const infoLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.info(log)
}

export const debugLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.debug(log)
}

export const traceLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    userId: getMaskedString(loggerInfo.userId),
  }
  originLogger.trace(log)
}

type LoggerWrapper = (
  logger: Logger,
  wrapperArguments: Pick<LoggerInfo, "traceId" | "userId">,
) => (message: Message) => void

export const loggerWrapper: LoggerWrapper =
  (logger, wrapperArguments) => (message) => {
    logger({
      ...wrapperArguments,
      message,
    })
  }
