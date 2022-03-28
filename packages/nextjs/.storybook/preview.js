import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { addDecorator } from "@storybook/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { Fragment } from "react"
import { withScreenshot } from "storycap"

export const decorators = [withScreenshot]

export const parameters = {
  actions: { argTypesRegex: "^handle[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
}

addDecorator((storyFn) => <Fragment>{storyFn()}</Fragment>)
