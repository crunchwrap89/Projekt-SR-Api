import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getKulturnytt()
    },
    methods: {
        getKulturnytt() {
        // Metoden hämtar Kulturnytt med hjälp av metoden getKulturnytt i EventService.
        // Metoden skriver sedan ut en lista på de 10 senaste avsnitten och lägger till dem på sidan. Metoden lägger även till 
        // en klickfunktion för varje element som spelar upp respektive avsnitt och byter ut bilden i "spelas nu"
            let roffel = document.getElementById('nyttId')
            let d = EventService.getKulturnytt()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById("ljudspelare")   
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let div = document.createElement('div')
                    //Ljudfilen kan ligga på två olika platser i jsonsvaret , därför prövas båda i en try catch.
                    try {
                        div.innerText = result.episodes[i].downloadpodfile.title
                        div.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    } catch (error) {
                        div.innerText = result.episodes[i].title
                        div.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].broadcast.broadcastfiles[0].url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    }
                    div.className="dAvsnitt"
                    div.style.backgroundImage="url(" + result.episodes[i].imageurl + ")"
                    roffel.appendChild(div)
                }
            })
        }        
    },  
    template: 
    `<div class="outerdiv">
    <div class="innerdiv">
          <h1> Kulturnytt avsnitt </h1>
      <div class="flex-container" id="nyttId">
      </div>
    </div>
</div>`
}