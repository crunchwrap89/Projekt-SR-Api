import Home from '../views/home.js'
import Radio from '../views/radio.js'
import About from '../views/about.js'

export default new VueRouter({
    routes: [ 
      { path: '/', component: Home },
      { path: '/radio', component: Radio },
      { path: '/about', component: About } 
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})