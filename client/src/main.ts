import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createApolloProvider } from '@vue/apollo-option'
import apolloClient from './ApolloClient'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

library.add(FontAwesomeIcon)

const app = createApp(App)

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(apolloProvider)
app.mount('#app')
