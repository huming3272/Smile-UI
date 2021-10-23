import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
// hash型路由
const router = createRouter(
// 创建路由器
    {
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            path:''
        ]},
        {path:'/switch',component:SwitchDemo}
    ]
}
)

const app = createApp(App)
app.use(router)
app.mount('#app')

