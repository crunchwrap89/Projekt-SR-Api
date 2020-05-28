
import EventError from './components/EventError.js'
import router from './router/index.js'

Vue.component('toast', EventError)

new Vue({
    el: '#app',
    router,
    EventError
  });

  