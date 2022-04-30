import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch/SwitchDemo.vue'
import Button from '../components/Button/ButtonDemo.vue'
import Dialog from '../components/Dialog/DialogDemo.vue'
import Tabs from '../components/Tabs/TabsDemo.vue'
import DocDemo from '../components/DocDemo.vue'

import Intro from '../views/Intro.vue';
import GetStarted from '../views/GetStarted.vue'
import Install from '../views/Install.vue'
import Breadcrumb from '../lib/Breadcrumb.vue'
import Text from '../lib/text.vue'

import { h } from 'vue';
import Markdown from '../components/Markdown.vue';
const md = (filename) => {return h(Markdown,{path:`../markdown/${filename}.md`, key: filename})}
//  必须加上不同的key，不然切换组件后，渲染会失败
const history = createWebHashHistory()
// hash型路由
 const router = createRouter(
// 创建路由器
    {
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/bread',component: Breadcrumb},
        {path:'/doc',component:Doc,
        children:[
            { path:'',component:DocDemo,
                meta:{
                    title: '文档'
                }},
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
