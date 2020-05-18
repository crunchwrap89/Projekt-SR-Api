import Home from '../views/home.js'
import Radio from '../views/radio.js'
import Archive from '../views/archive.js'
import About from '../views/about.js'
import Dokumentar from '../views/dokumentar.js'
import Dystopia from '../views/dystopia.js'
import EkonomiEkot from '../views/ekonomiEkot.js'
import Radiosporten from '../views/radiosporten.js'
import Radiofinska from '../views/radiofinska.js'
import SamiskaNyheter from '../views/samiskaNyheter.js'
import Kulturnytt from '../views/kulturnytt.js'

export default new VueRouter({
    routes: [ 
      { path: '/', component: Home },
      { path: '/radio', component: Radio },
      { path: '/archive', component: Archive },
      { path: '/about', component: About },
      { path: '/dokumentar', component: Dokumentar },
      { path: '/dystopia', component: Dystopia },
      { path: '/ekonomiEkot', component: EkonomiEkot }, 
      { path: '/radiosporten', component: Radiosporten },
      { path: '/radiofinska', component: Radiofinska },
      { path: '/samiskaNyheter', component: SamiskaNyheter },
      { path: '/kulturnytt', component: Kulturnytt }
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

