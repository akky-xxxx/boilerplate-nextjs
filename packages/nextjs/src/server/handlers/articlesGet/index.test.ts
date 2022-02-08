import supertest from "supertest"
import { spyOn } from "jest-mock"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "../../modules/initialize"
import { AspidaResponse } from "aspida"
import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../../shared/utils/strapiApiClient"
import { Methods } from "../../../libs/apiClient/strapi/articles"

// テスト＆＆急ぎなので重要じゃないルールは除外
/* eslint-disable no-magic-numbers, sort-keys */

const app = getServer()
const request = supertest(app)

type Response = AspidaResponse<Methods["get"]["resBody"]>

const originalResponse: Methods["get"]["resBody"] = [
  {
    id: "01234567890123456789",
    title: "test-title",
    body: "test-ストレッチ予約ができていなかった",
    thumbnail: {
      id: "thumbnail-id",
      name: "thumbnail-name",
      hash: "thumbnail-hash",
      mime: "image/jpeg",
      size: 100_000,
      url: "thumbnail-url",
      provider: "thumbnail-provider",
    },
    published_at: "2021-12-16T15:00:00Z",
  },
]

const aspidaResponse: Response = {
  headers: {},
  body: originalResponse,
  status: 200,
  originalResponse,
}

describe("GET /api/inquiries", () => {
  // TODO: テスト内容を正す
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("inquiries 取得成功時、status: 200 でフロント用のデータを返す", async () => {
    const spy = spyOn(strapiApiClient.articles, "get")
    spy.mockReturnValue(
      // TODO: strapi openapi を openapi2aspida に食わせたときの api client の型が正しくなったら修正
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Promise.resolve(aspidaResponse),
    )
    const res = await request.get("/api/inquiries")

    expect(spy).toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(res.body).toStrictEqual([
      {
        inquiryBody: "test-ストレッチ予約ができていなかった",
        inquiryDate: "2021年12月17日 0時0分0秒",
        inquiryId: "01234567890123456789",
      },
    ])

    spy.mockRestore()
  })
})
