import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './components/Frank.vue'
import Frank2 from './components/Doc.vue'

const history = createWebHashHistory()
// hash型路由
const router = createRouter(
// 创建路由器
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

