export const isObject = (
  argument: unknown,
): argument is Record<string, unknown> =>
  argument !== null &&
  typeof argument === "object" &&
  argument.constructor === Object
