import { createApp } from 'vue'
import App from './App.vue'

// 加载vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import store from './store'
import './styles/index.less'
import './rem.js'
// 自动设置rem基准值
// import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')
