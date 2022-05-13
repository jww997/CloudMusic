/**
 * @description arco-design
 * @author Gavin
 */
import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"

export const arcod = [
  Components({
    resolvers: [ArcoResolver()],
  }),
]
