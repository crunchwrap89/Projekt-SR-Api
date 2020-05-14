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
    playSverigesRadioFinska() {
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
  template: `<div class="outerdiv">
                             <div class="innerdiv">
                              <div class="vansterdiv">
                              <h1> Donald Trump: "It's fake news"</h1>
                              <img src="../images/fakenews.jpg" alt="Italian Trulli" style="width:100%;max-width:800px">
                            <p> 
                              Lorem ipsum dolor sit amet, ex erant oratio iuvaret sea, sit ne dicit utinam molestie, ne sit nusquam percipit. Vis ea adhuc nonumy facilisi, tractatos splendide suscipiantur et mel. Errem sapientem at mel, mel cu vocent epicurei persecuti. Pri tempor copiosae platonem at, fastidii mediocritatem in pro, vix iudico integre prompta cu.
                              Nulla mazim viris sed cu, sententiae definitionem eam in.  
                            </p>
                            <h1> Riots emerge in Germany - Frankfurt all out of sauerkraut</h1>
                            <img src="../images/riot.jpg" alt="riot" style="width:100%;max-width:800px">

                            </div>
                            <div class="hogerdiv">
                            <div class="flex-container">
                            <div class="nyheter1">Kulturnytt <img class="playbtn" src="../images/playbtn.png" @click="playKulturnytt"></div>
                            <div class="nyheter2">Sveriges Radio Finska <img class="playbtn" src="../images/playbtn.png" @click="playSverigesRadioFinska"></div>
                            <div class="nyheter3">Radiosportens Nyhetssändning <img class="playbtn" src="../images/playbtn.png" @click="playRadiosportensNyhetssandningar"></div>  
                            <div class="nyheter4">Ekonomiekot <img class="playbtn" src="../images/playbtn.png" @click="playEkonomiekot"></div>
                            <div class="nyheter4">Samiska Nyheter <img class="playbtn" src="../images/playbtn.png" @click="playSamiskaNyheter"></div>
                            <div>LocalNewZ</div> 
                            <div>LocalNewZ</div>
                            <p>
                              Radio news shows:
                              <ul>
                              <li @click="playKulturnytt">Kulturnytt</li>
                              <li @click="playNewsSverigesRadioFinska">Sveriges Radio Finska</li>
                              <li @click="playRadiosportensNyhetssandningar">Radiosportens Nyhetssändningar</li>
                              <li @click="playEkonomiekot">Ekonomiekot</li>
                              <li @click="playSamiskaNyheter">Samiska Nyheter</li>
                              </ul>
                            </p>
                            </div>
                            </div>
                          </div>` }