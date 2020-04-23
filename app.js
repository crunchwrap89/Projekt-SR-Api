
 fetch("http://api.sr.se/api/v2/programs?format=json")

    .then(response => response.json())
    .then(json => console.log(json))

knapp1.addEventListener('click', () => {
// metod att starta här     
})
knapp2.addEventListener('click', () => {
// metod att starta här 
})
knapp3.addEventListener('click', () => {
// metod att starta här
})
knapp4.addEventListener('click', () => {
// metod att starta här
})


async function playRadioChannel() {

}
async function pauseRadioChannel() {

}

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

