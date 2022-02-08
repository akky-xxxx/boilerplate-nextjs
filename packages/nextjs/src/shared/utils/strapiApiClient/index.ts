import aspida from "@aspida/axios"
import axios from "axios"
import api from "../../../libs/apiClient/strapi/$api"

const { NEXT_PUBLIC_API_SERVER } = process.env

if (!NEXT_PUBLIC_API_SERVER)
  throw new Error("env.NEXT_PUBLIC_API_SERVER が定義されていません")

const axiosInstance = axios.create({ baseURL: NEXT_PUBLIC_API_SERVER })
export const strapiApiClient = api(aspida(axiosInstance))
