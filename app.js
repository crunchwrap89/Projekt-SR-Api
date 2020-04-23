import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'

Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    }
  });
