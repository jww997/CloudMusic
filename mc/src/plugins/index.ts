/**
 * @description 插件
 * @author Gavin
 */
import vueJsx from '@vitejs/plugin-vue-jsx'
import { arcod } from "./arcod"

import vue from "@vitejs/plugin-vue"
export const plugins = [vue(), vueJsx(), ...arcod]
