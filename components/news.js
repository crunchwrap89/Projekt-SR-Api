import EventService from '../services/EventService.js'

export default {
    
    methods: {
        showNewsPrograms() {
            let e = EventService.showNewsPrograms()
            e.then((result) => {
                  this.titles.push(result[27].program.name)
                  this.titles.push(result[28].program.name)
                  this.titles.push(result[29].program.name)
                  this.titles.push(result[32].program.name)
                  this.titles.push(result[33].program.name)
              
            })
        },
        playKulturnytt() {
            let e = EventService.showNewsPrograms()
            let p = document.getElementById("ljudspelare")
            e.then((result) => {
                for (let i= 0; i < result.length; i++) {
                    if (result[i].program.id === 478) {
                        p.setAttribute("src", result[i].broadcast.broadcastfiles[0].url)
                    }
                }
            })
        },
        playNewsSverigesRadioFinska() {
            let e = EventService.showNewsPrograms()
            let p = document.getElementById("ljudspelare")
            e.then((result) => {
                for (let i= 0; i < result.length; i++) {
                    if (result[i].program.id === 185) {
                        p.setAttribute("src", result[i].broadcast.broadcastfiles[0].url)
                    }
                }
            })

        },
        playRadiosportensNyhetssandningar() {
            let e = EventService.showNewsPrograms()
            let p = document.getElementById("ljudspelare")
            e.then((result) => {
                for (let i= 0; i < result.length; i++) {
                    if (result[i].program.id === 2895) {
                        p.setAttribute("src", result[i].broadcast.broadcastfiles[0].url)
                    }
                }
            })
 
        },
        playEkonomiekot() {
            let e = EventService.showNewsPrograms()
            let p = document.getElementById("ljudspelare")
            e.then((result) => {
                for (let i= 0; i < result.length; i++) {
                    if (result[i].program.id === 178) {
                        p.setAttribute("src", result[i].broadcast.broadcastfiles[0].url)
                    }
                }
            })

        },
        playSamiskaNyheter() {
            let e = EventService.showNewsPrograms()
            let p = document.getElementById("ljudspelare")
            e.then((result) => {
                for (let i= 0; i < result.length; i++) {
                    if (result[i].program.id === 2327) {
                        p.setAttribute("src", result[i].broadcast.broadcastfiles[0].url)
                    }
                }
            })
                console.log("tjo")
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <ul>
                    <li @click="playKulturnytt">Kulturnytt</li>
                    <li @click="playNewsSverigesRadioFinska">Sveriges Radio Finska</li>
                    <li @click="playRadiosportensNyhetssandningar">Radiosportens Nyhetssändningar</li>
                    <li @click="playEkonomiekot">Ekonomiekot</li>
                    <li @click="playSamiskaNyheter">Samiska Nyheter</li>
                    </ul>                   
                </div>
               </div>`
}