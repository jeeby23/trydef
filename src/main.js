import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './main.css'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(MotionPlugin)
// createApp(App).use(router).mount('#app')
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
app.mount('#app')

