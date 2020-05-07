import EventKnappar from './components/EventKnappar.js'
import EventError from './components/EventError.js'

Vue.component('action-bar', EventKnappar)
Vue.component('toast', EventError)

const Home = { template: `<div><p>My home page</p><nav>
                              <router-link tag="li" class="col" class-active="active" to="/radio">Radio</router-link>
                              <router-link tag="li" class="col" class-active="active" to="/about">About</router-link>
                          </nav></div>` }
const Radio = { template: `<div><p>Radio</p><nav>
                              <router-link tag="li" class="col" class-active="active" to="/">Home</router-link>
                              <router-link tag="li" class="col" class-active="active" to="/about">About</router-link>
                          </nav>
                            <action-bar></action-bar>
                            <audio id ="ljudspelare" src="http://sverigesradio.se/topsy/direkt/srapi/164.mp3" autoplay="" controls="" style="height: 40px; width: 66%;"></audio>
                          </div>` }
const About = { template: `<div><p>About</p><nav>
                              <router-link tag="li" class="col" class-active="active" to="/">Home</router-link>
                              <router-link tag="li" class="col" class-active="active" to="/radio">Radio</router-link>
                            </nav></div>` }
const router = new VueRouter({
      routes: [ 
        { path: '/', component: Home },
        { path: '/radio', component: Radio },
        { path: '/about', component: About } 
    ]})

let app = new Vue({
    el: '#app',
    data: {
      message: 'Välj en radiokanal!'
    },
    router
  });
