/**
 * @description arco-design
 * @author Gavin
 */
import {app} from "@/main"
import ArcoVue from "@arco-design/web-vue"
import ArcoVueIcon from "@arco-design/web-vue/es/icon"
import "@arco-design/web-vue/dist/arco.less"

type PLUGIN = () => void

const plugin: PLUGIN = () => {
    app.use(ArcoVue).use(ArcoVueIcon)
}

export default plugin
