import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'
import News from './components/news.js'
import router from './router/index.js'

Vue.component('news', News)
Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

let app = new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    },
    router
  });
