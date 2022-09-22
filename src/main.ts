import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import routes from './routes';

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
