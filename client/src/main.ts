import './assets/main.css'

import { createApp } from 'vue'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far)
library.add(fas)

// Créez une instance de Apollo Client
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

provideApolloClient(apolloClient)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.provide(DefaultApolloClient, apolloClient)
app.use(router)
app.mount('#app')
