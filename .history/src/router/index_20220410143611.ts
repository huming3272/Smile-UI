import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/SwitchDemo.vue'
import Button from '../components/ButtonDemo.vue'
import Dialog from '../components/DialogDemo.vue'
import Tabs from '../components/TabsDemo.vue'
import DocDemo from '../components/DocDemo.vue'

import Intro from '../views/Intro.vue';
import GetStarted from '../views/GetStarted.vue'
import Install from '../views/Install.vue'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = (filename) => {return h(Markdown,{path:`../markdown/${filename}.md`, key: filename})}

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
            { path:'',component:DocDemo },
            { path:'switch',component:Switch },
            { path:'button',component:Button },
            { path:'Dialog',component:Dialog },
            { path:'Tabs',component:Tabs },
            { path: "intro", component: md('intro') },
            { path: "get-started", component: md('get-started') },
            { path: "install", component: md('install') },
        ]},

    ]
}
)


export default router
