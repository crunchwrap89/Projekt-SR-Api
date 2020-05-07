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
                            </nav>
                            <p>Lorem ipsum dolor sit amet, ex erant oratio iuvaret sea, sit ne dicit utinam molestie, ne sit nusquam percipit. Vis ea adhuc nonumy facilisi, tractatos splendide suscipiantur et mel. Errem sapientem at mel, mel cu vocent epicurei persecuti. Pri tempor copiosae platonem at, fastidii mediocritatem in pro, vix iudico integre prompta cu.
                              Nulla mazim viris sed cu, sententiae definitionem eam in. Ei nam oratio legendos, assum essent latine sed ea, has ei tantas pertinacia. Tempor persius salutatus te his, no primis ceteros his. Cu pri dicat dicit conclusionemque, dicat deleniti scribentur eam no. Sonet choro no vis, eum ad wisi aperiri albucius, qui quis sale scaevola eu.
                              Ea quaeque erroribus quo. Eu vim facilisi recusabo constituto, eu duo ignota rationibus. Ne simul melius prodesset has, qui omnesque volutpat et. Et vel modo tollit pericula, probo alienum eos an. Ne ius impetus elaboraret, et paulo audiam duo, eum natum utroque ei.
                              Vim cibo paulo putant ad, id vis solet interesset, pri an mucius euripidis. At nec error putant mentitum, aliquando forensibus argumentum te est. Vel ad ludus nostro signiferumque, eam in sumo elitr assueverit. Cu mei possit noluisse. Eripuit moderatius cu vim.
                              In vide sadipscing sit, epicuri facilisi te mea. Te quidam repudiandae qui, ius ne quas mucius inimicus. Pri possit sensibus eloquentiam at, eum te commodo diceret iudicabit. Has ei vocent vivendum, laudem numquam graecis id usu. Dolorem hendrerit ad ius. Est primis habemus at, ei duo cibo cetero virtute.
                            </p>
                            </div>` }
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
