import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory()
// hash型路由
const router = createRouter(
// 对
    {
    history:history,
    routes:[
        {path:'/',component:Frank},
        {path:'/xxx',component:Frank2}
    ]
}
)

const app = createApp(App)
app.use(router)
app.mount('#app')

