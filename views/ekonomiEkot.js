import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getEkonomiEkot()
    },
    methods: {
        // Metoden hämtar Ekonomiekot med hjälp av metoden getEkonomiEkot i EventService.
        // Metoden skriver sedan ut en lista på de 10 senaste avsnitten och lägger till dem på sidan. Metoden lägger även till 
        // en klickfunktion för varje element som spelar upp respektive avsnitt och byter ut bilden i "spelas nu"

        getEkonomiEkot() {
            let roffel = document.getElementById('nyttId')
            let d = EventService.getEkonomiEkot()
            let l = document.getElementById("ljudspelare")
            let img = document.getElementById("nuspelas")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let div = document.createElement('div')
                    let titeln = result.episodes[i].downloadpodfile.title
                    div.innerText = titeln
                    // I svaret från SRs API så är titeln ibland "Ekonomiekot" och ibland "Ekonomieko". 
                    // If-satsen tar bort T:et om det finns så att det blir lika.
                    if (div.innerText.charAt(10) === "t") {
                        div.innerText = titeln.slice(0, 10) + titeln.slice(11, titeln.length)
                    }                     
                    div.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)
                      } );
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