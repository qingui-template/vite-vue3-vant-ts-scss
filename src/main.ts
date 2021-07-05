import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/reset.scss'
import './styles/common.scss'

import { ConfigProvider, Button, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(ConfigProvider).use(Button).use(Tabbar).use(TabbarItem)
app.use(router)
app.mount('#app')
