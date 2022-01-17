// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next"

type Data = {
  name: string
}

const SuccessHttpCode = 200

export default function handler(res: NextApiResponse<Data>) {
  res.status(SuccessHttpCode).json({ name: "John Doe" })
}
