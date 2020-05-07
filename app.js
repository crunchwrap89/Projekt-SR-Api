import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'

Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

const Home = { template: '<p>my home page</p>' }
const About = { template: '<p>my about page</p>' }
const router = new VueRouter({routes: [ { path: '/', component: Home },                 
                             { path: '/about', component: About } ]    })



new Vue({
    el: '#app',
    router,
    data: {
      message: 'Välj en radiokanal!'
    }
  });
