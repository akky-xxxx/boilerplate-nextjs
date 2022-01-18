import { HoCTestProps, TestProps } from "../../types"

type UseTest = (args: HoCTestProps) => TestProps
export const useTest: UseTest = (args) => ({ test2: String(args.test1) })
