import { ErrorRequestHandler } from "express"
import { errorLogger, loggerWrapper } from "../../utils/logger"

export const errorHandler: ErrorRequestHandler = (error, _req, _res, next) => {
  const errorLoggerMain = loggerWrapper(errorLogger, {
    traceId: "dummy-traceId", // TODO: session? あたりから取得
    userId: "dummy-userId", // TODO: session? あたりから取得
  })
  errorLoggerMain(JSON.stringify(error))
  next()
}
