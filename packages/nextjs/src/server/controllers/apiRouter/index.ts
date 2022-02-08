import { Router } from "express"
import { articlesGet } from "../../handlers/articlesGet"

const apiRouter = Router()

apiRouter.get("/inquiries", articlesGet)

export { apiRouter }
