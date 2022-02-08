import { json, Router, urlencoded } from "express"
import helmet from "helmet"
import { HelmetOptions } from "./const/HelmetOptions"

const commonMiddleware = Router()

commonMiddleware.use(helmet(HelmetOptions))
commonMiddleware.use(json())
commonMiddleware.use(urlencoded({ extended: false }))

export { commonMiddleware }
