import EventService from '../services/EventService.js'

export default {
  methods: {
    playNewsChannel(channelId) {
      let e = EventService.showNewsPrograms()
      let p = document.getElementById("ljudspelare")
      e.then((result) => {
        for (let i = 0; i < result.episodes.length; i++) {
          if (result.episodes[i].program.id === channelId) {
            try {
              p.setAttribute("src", result.episodes[i].broadcast.broadcastfiles[0].url)
            } catch {
              p.setAttribute("src", result.episodes[i].listenpodfile.url)
            }
          }
        }
      })
    },
  },
  template: `<div class="outerdiv">
                             <div class="innerdiv2">
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
                            <div class="nyheter1">Kulturnytt <img class="playbtn" src="../images/playbtn.png" @click="playNewsChannel(478)"></div>
                            <div class="nyheter2">Sveriges Radio Finska <img class="playbtn" src="../images/playbtn.png" @click="playNewsChannel(185)"></div>
                            <div class="nyheter3">Radiosportens Nyhetssändning <img class="playbtn" src="../images/playbtn.png" @click="playNewsChannel(2895)"></div>  
                            <div class="nyheter4">Ekonomiekot <img class="playbtn" src="../images/playbtn.png" @click="playNewsChannel(178)"></div>
                            <div class="nyheter4">Samiska Nyheter <img class="playbtn" src="../images/playbtn.png" @click="playNewsChannel(2327)"></div>
                            </div>
                            </div>
                          </div>` }