/**
 * @description main
 * @author Gavin
 */
import {createApp} from "vue"
import {router} from "@/router"
import {store} from "@/store"
import App from "@/App.vue"
import {plugins} from "@/plugins"
import "@/styles/index.less"

export const app = createApp(App)
app.use(router).use(store).mount("#app")
plugins()
