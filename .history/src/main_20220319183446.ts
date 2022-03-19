import "./lib/gulu.scss";
import "./lib/svg.js";
import "./index.scss";
import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')

