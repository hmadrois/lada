import { createApp } from 'vue'

import Lada from './Lada.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

import id from './locale/id.json'

const app = createApp(Lada)

app.use(PrimeVue, {
    locale: id,
    theme: {
        preset: Aura,
        options: {  darkModeSelector: 'light' }
    }
})

app.mount('#app')
