import { Methods } from "../../../libs/apiClient/strapi/articles"
import { strapiApiClient } from "../../../shared/utils/strapiApiClient"
import { apiHandler } from "../../utils/apiHandler"
import { isErrorStatus } from "../../utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../utils/logger"

type Result = {
  body: Methods["get"]["resBody"]
  status: number
}

const articlesGetBase = async () => {
  const infoLoggerMain = loggerWrapper(infoLogger, {
    traceId: "dummy-traceId", // TODO: session? あたりから取得
    userId: "dummy-userId", // TODO: session? あたりから取得
  })
  const result = await strapiApiClient.articles.get()
  // openapi2aspida でうまく生成されてないため
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const { body: articles, status } = result as Result
  infoLoggerMain({
    endpoint: "GET: /inquiries",
    response: { articles, status },
  })

  if (isErrorStatus(status)) throw new Error(`status: ${status}`)

  const returnValue = articles.map((article) => {
    const {
      id: articleId,
      body,
      title,
      thumbnail,
      published_at: publishedAt,
    } = article
    return { articleId, body, publishedAt, thumbnail, title }
  })
  infoLoggerMain({ returnValue })
  return returnValue
}

export const articlesGet = apiHandler(articlesGetBase)
