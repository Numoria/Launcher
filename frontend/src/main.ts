import {createApp} from 'vue'
import App from './App.vue'
import devtools from '@vue/devtools'
import { store, key } from './store'

createApp(App).use(store, key).mount('#app')
if (process.env.NODE_ENV === 'development') {
    devtools.connect(/* host, port */)
}
  