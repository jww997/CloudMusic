/**
 * @description arco-design
 * @author Gavin
 */

// import type { App } from "vue"
// import ArcoVue from "@arco-design/web-vue"
// import "@arco-design/web-vue/dist/arco.css"
// export const setupArcod = (app: App<Element>) => {
//   app.use(ArcoVue, {
//     // 用于改变使用组件时的前缀名称
//     // componentPrefix: 'arco'
//   })
// }

import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
// import '@arco-design/web-vue/dist/arco.css';
// import { createStyleImportPlugin } from 'vite-plugin-style-import'

export const arcod = [
  Components({
    resolvers: [ArcoResolver()],
  }),
  // createStyleImportPlugin({
  //   libs: [
  //     {
  //       libraryName: "@arco-design/web-vue",
  //       esModule: true,
  //       resolveStyle: (name: string) => {
  //         // // css
  //         // return `@arco-design/web-vue/es/${name}/style/css.js`
  //         // less
  //         return `@arco-design/web-vue/es/${name}/style/index.js`
  //       },
  //     },
  //   ],
  // }),
]
