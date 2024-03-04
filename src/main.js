import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入全局混入
import mainMixin from '@/mixins/mainMixin';

const app = createApp(App);

app.mixin(mainMixin).use(router).mount('#app');
