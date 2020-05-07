import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'

Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

const Home = { template: '<p>my home page</p>' }
const About = { template: '<p>my about page</p>' }
const router = new VueRouter({
  routes: [ { path: '/', component: Home },                 
            { path: '/about', component: About } ]    
          })



let app = new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    },
    router
  });
