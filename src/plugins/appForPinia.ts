import type { App } from "vue"
import type { PiniaPluginContext } from "pinia"

// type App = PiniaPluginContext["app"]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PiniaPluginContextExtended extends PiniaPluginContext {
  app: App
}

export function appForPinia({ app }: PiniaPluginContext) {
  return { $app: app }
}

declare module "pinia" {
  export interface PiniaCustomProperties {
    $app: App
  }
}
