import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
// hash型路由
const router = createRouter(
// 创建路由器
    {
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
}
)

const app = createApp(App)
app.use(router)
app.mount('#app')

