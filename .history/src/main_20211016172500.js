import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory()
const router = createRouter()

const app = createApp(app)
app.use(router)


createApp(App).mount('#app')
