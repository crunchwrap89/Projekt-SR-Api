import ActionBar from './components/EventKnappar.js'
import ErrorToast from './components/EventError.js'

Vue.component('action-bar', ActionBar)
Vue.component('toast', ErrorToast)

new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    }
  });

