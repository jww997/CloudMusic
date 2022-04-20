/**
 * @description 入口
 * @author Gavin
 */
import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { store } from '@/store';
// import { i18n } from '@/locale';
import "@/styles/index.less"

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';


const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);



app.use(router).use(store).mount('#app');
// app.use(i18n);

import { Notification } from '@arco-design/web-vue';
app.config.globalProperties.$notification = Notification



// import { usePlugins } from "@/plugins"
// usePlugins(app)
