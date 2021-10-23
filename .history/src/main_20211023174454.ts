import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')

