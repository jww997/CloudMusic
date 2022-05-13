/**
 * @description 入口
 * @author Gavin
 */
import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { store } from '@/store';
import "@/styles/index.less"

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';


const app = createApp(App);

app.use(ArcoVue).use(ArcoVueIcon);
app.use(router).use(store).mount('#app');

// import { Notification } from '@arco-design/web-vue';
// app.config.globalProperties.$notification = Notification
