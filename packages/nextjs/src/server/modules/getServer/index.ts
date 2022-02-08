import express, { Express } from "express"
import { RequestHandler } from "next/dist/server/next-server"
import { router } from "../../controllers"
import { commonMiddleware } from "../commonMiddleware"
import { errorHandler } from "../errorHandler"

// test 向けに nextHandler を optional にしてる
type GetServer = (nextHandler?: RequestHandler) => Express
export const getServer: GetServer = (nextHandler) => {
  const server = express()

  server.use(commonMiddleware)

  server.use(router)

  if (nextHandler) {
    // referer: https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js#L12
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    server.all("*", (req, res) => nextHandler(req, res))
  }

  // 全 request handler より後ろ
  server.use(errorHandler)

  return server
}
