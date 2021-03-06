import EventService from '../services/EventService.js'

export default {
  methods: {
    // Metoden tar emot ett kanalId som argument. Metoden hämtar sedan en lista över program med hjälp av showNewsPrograms i EventService
    // for loopen loopar igenom alla avsnitt tills den hittar ett program som har ett id som överenstämmer med det som angavs i argumentet.
    // sedan lägger metoden till programmet i frågas ljudfil i spearen och byter ut bilden i "spelas nu".
    playNewsChannel(channelId) {
      let e = EventService.showNewsPrograms()
      let p = document.getElementById("ljudspelare")
      let img = document.getElementById("nuspelas")
      e.then((result) => {
        for (let i = 0; i < result.episodes.length; i++) {
          if (result.episodes[i].program.id === channelId) {
            img.setAttribute("src", result.episodes[i].imageurl)
            //Ljudfilen kan ligga på två olika platser i jsonsvaret , därför prövas båda i en try catch.
            try {
              p.setAttribute("src", result.episodes[i].broadcast.broadcastfiles[0].url)
            } catch (error) {
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
          <h1> Senaste nytt </h1>
          <div class="flex-container">
            <div class="n1"><img class="playbtn" src="../images/playbtn.png" alt="playbtn" @click="playNewsChannel(478)">Kulturnytt</div>
            <div class="n2"><img class="playbtn" src="../images/playbtn.png" alt="playbtn" @click="playNewsChannel(185)">Sveriges Radio Finska</div>
            <div class="n3"><img class="playbtn" src="../images/playbtn.png" alt="playbtn" @click="playNewsChannel(2895)">Radiosportens Nyhetssändning</div> 
            <div class="n4"><img class="playbtn" src="../images/playbtn.png" alt="playbtn" @click="playNewsChannel(178)">Ekonomiekot</div>
            <div class="n5"><img class="playbtn" src="../images/playbtn.png" alt="playbtn" @click="playNewsChannel(2327)">Samiska Nyheter</div>
          </div>
        </div>
    </div>
  </div>` }
