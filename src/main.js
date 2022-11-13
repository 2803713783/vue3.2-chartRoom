import {
    createApp
} from 'vue'
import ArcoVue from '@arco-design/web-vue';

import App from './App.vue'
import router from './router/index'
import '@arco-design/web-vue/dist/arco.css';
//全局样式
import './style/index.scss'

/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind.css'
/** 
 *项目内的样式，
 *注意：最好放在重置样式后，uno.css前
 */
import './style.css'
/** 引入uno.css，不引入不生效 */
import 'uno.css'

//状态
import store from './store'
createApp(App).use(ArcoVue).use(router).use(store).mount('#app')