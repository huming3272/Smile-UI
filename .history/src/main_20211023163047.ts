import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/SwitchDemo.vue'

const history = createWebHashHistory()
// hash型路由
const router = createRouter(
// 创建路由器
    {
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children:[
            {path:'switch',component:Switch},
            {path:'button',component:Button}
        ]},

    ]
}
)

const app = createApp(App)
app.use(router)
app.mount('#app')

