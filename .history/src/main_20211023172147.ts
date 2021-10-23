import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
X

const app = createApp(App)
app.use(router)
app.mount('#app')

