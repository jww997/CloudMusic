/**
 * @description 插件
 * @author Gavin
 */
import {
  arcod,
  // setupArcod,
} from "./arcod"
// import type { App } from "vue"
// export const usePlugins = (app: App<Element>) => {
//   setupArcod(app)
// }
import vueJsx from '@vitejs/plugin-vue-jsx'

import vue from "@vitejs/plugin-vue"
export const plugins = [vue(), vueJsx(), ...arcod]
