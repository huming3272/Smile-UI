import "./lib/gulu.scss";
import "./lib/svg.js";
import "./index.scss";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import githubmarkdown-css from 'github-markdown-css';

const app = createApp(App)
app.use(router)
app.mount('#app')
