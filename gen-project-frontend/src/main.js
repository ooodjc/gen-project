import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons'
import 'element-plus/dist/index.css'
import './mycss.css'
import App from './App.vue'
import router from './route'
import store from './store'
const app = createApp(App)
//遍历注册icons
for (const name in ElIcons){
	app.component(name,ElIcons[name])
}
// 屏蔽警告信息
app.config.warnHandler = () => null;

app.use(ElementPlus).use(router).use(store).mount('#app')
