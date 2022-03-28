import next from "next"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "./modules/initialize"
import { getServer } from "./modules/getServer"
import { IsDevelopment } from "../shared/const/common"
import { loggerWrapper, traceLogger, fatalLogger } from "./utils/logger"

const DefaultPort = 3000
const Port = process.env.PORT || DefaultPort
const app = next({ dev: IsDevelopment, dir: "./" })
const handler = app.getRequestHandler()

const traceLoggerMain = loggerWrapper(traceLogger, {
  traceId: "-",
  userId: "-",
})
const fatalLoggerMain = loggerWrapper(fatalLogger, {
  traceId: "-",
  userId: "-",
})

app
  .prepare()
  .then(() => {
    const server = getServer(handler)

    server.listen(Port, () => {
      // 開発時だけ見れればいいため
      if (IsDevelopment) traceLoggerMain(`> Ready on http://localhost:${Port}`)
    })
  })
  .catch((error: unknown) => {
    fatalLoggerMain(String(error))
  })
