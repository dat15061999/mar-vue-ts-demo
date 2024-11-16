import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppVue from '@/App.vue'
import router from '@/router'
import { appForPinia } from './plugins/appForPinia'
import { installAxios } from './plugins/axios'

const app = createApp(AppVue)
const pinia = createPinia()
app.use(pinia)
pinia.use(appForPinia)
app.use(router)
app.use(installAxios)

app.mount('#app')
