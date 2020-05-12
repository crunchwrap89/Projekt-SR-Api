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

// autohide navigationbar when scrolling down.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}