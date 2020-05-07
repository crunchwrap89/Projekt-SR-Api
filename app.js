import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'

Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

const Home = { template: `<div><p>my home page</p><nav>
                              <router-link to="/page1">Page 1</router-link>
                              <router-link to="/page2">Page 2</router-link>
                          </nav></div>` }
const Page1 = { template: `<div><p>page 1</p><nav>
                              <router-link to="/">Home</router-link>
                              <router-link to="/page2">Page 2</router-link>
                          </nav></div>` }
const Page2 = { template: `<div><p>page 2</p><nav>
                              <router-link to="/">Home</router-link>
                              <router-link to="/page1">Page 1</router-link>
                            </nav></div>` }
const router = new VueRouter({
      routes: [ 
        { path: '/', component: Home },
        { path: '/page1', component: Page1 },
        { path: '/page2', component: Page2 } 
    ]})

let app = new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    },
    router
  });
