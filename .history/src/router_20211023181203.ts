import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'

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

router.afterEach(()=>{
    console.log('路由切换了')
})
export default
router
