import { createApp } from 'vue'
import App from './App.vue'
import { store } from './plugins/store'
// @ts-ignore
import router from './plugins/router/router.ts'
import './index.css'

//TODO: wait for release of Bootstrap-Vue
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// @ts-ignore
createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
