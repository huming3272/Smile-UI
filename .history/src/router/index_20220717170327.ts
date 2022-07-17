import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch/SwitchDemo.vue'
import Button from '../components/Button/ButtonDemo.vue'
import Dialog from '../components/Dialog/DialogDemo.vue'
import Tabs from '../components/Tabs/TabsDemo.vue'
import DocDemo from '../components/DocDemo.vue'
import Breadcrumb from '../components/Breadcrumb/BreadcrumbDemo.vue'
import Cascader from '../components/Cascader/CascaderDemo.vue'

import Intro from '../views/Intro.vue';
import GetStarted from '../views/GetStarted.vue'
import Install from '../views/Install.vue'
import Text from '../lib/text.vue'
import notFound from '../views/notFound.vue'

import { h } from 'vue';
import Markdown from '../components/Markdown.vue';
const md = (filename) => { return h(Markdown, { path: `../markdown/${filename}.md`, key: filename }) }
const md = string => h(Markdown, { content: string, key: string })
//  必须加上不同的key，不然切换组件后，渲染会失败
const history = createWebHashHistory()
// hash型路由
const router = createRouter(
    // 创建路由器
    {
        history: history,
        routes: [
            {
                path: '/',
                meta: {
                    title: '首页'
                },
                component: Home,
            },
            {
                path: '/doc', component: Doc,
                meta: {
                    title: '文档'
                },
                children: [
                    {
                        path: '', component: DocDemo,
                    },
                    {
                        path: 'switch', component: Switch,
                        meta: {
                            title: '开关'
                        }
                    },
                    {
                        path: 'button', component: Button,
                        meta: {
                            title: '按钮'
                        }
                    },
                    {
                        path: 'dialog', component: Dialog,
                        meta: {
                            title: '对话框'
                        }
                    },
                    {
                        path: 'tabs', component: Tabs,
                        meta: {
                            title: '选项卡'
                        }
                    },
                    {
                        path: 'breadcrumb', component: Breadcrumb,
                        meta: {
                            title: '面包屑'
                        }
                    },
                    {
                        path: 'cascader',
                        component: Cascader,
                        meta: {
                            title: '级联选择器'
                        },
                    },
                    {
                        path: "intro", component: md(Intro),
                        meta: {
                            title: '介绍'
                        }
                    },
                    {
                        path: "get-started", component: md(getStarted),
                        meta: {
                            title: '开始'
                        }
                    },
                    {
                        path: "install", component: md(install),
                        meta: {
                            title: '安装'
                        }
                    },
                ]
            },
            {
                path: "/404",
                name: 'notFound',
                component: notFound
            },
            {
                path: '/:pathMatch(.*)', redirect: '/404',
                //  catchAll
                // 配置任意未知页面404未找到
                meta: {
                    title: '404'
                }
            }
        ]
    }
)


export default router
