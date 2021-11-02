import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/SwitchDemo.vue'
import Button from '../components/ButtonDemo.vue'
import Dialog from '../components/DialogDemo.vue'
import Tabs from '../components/TabsDemo.vue'
import DocDemo from '../components/DocDemo.vue'

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
            {path:'',component:DocDemo},
            {path:'switch',component:Switch},
            {path:'button',component:Button},
            {path:'Dialog',component:Dialog},
            {path:'Tabs',component:Tabs},
        ]},

    ]
}
)


export default router
