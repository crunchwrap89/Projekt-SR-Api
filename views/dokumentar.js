import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getDocumentaries()

    },

    methods: {
    
    
        getDocumentaries() {
        // Metoden hämtar p3 Dokumentär med hjälp av metoden getDocumentaries i EventService.
        // Metoden skriver sedan ut en lista på de 10 senaste avsnitten och lägger till dem på sidan. Metoden lägger även till 
        // en klickfunktion för varje element som spelar upp respektive avsnitt och byter ut bilden i "spelas nu"
            let docu = document.getElementById('docu')
            let d = EventService.getDocumentaries()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById('ljudspelare')
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let div = document.createElement('div')
                    div.innerText = result.episodes[i].title
                    div.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].listenpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)
                        

                      } );
                      div.className="dAvsnitt"
                    docu.appendChild(div)
                    div.style.backgroundImage="url(" + result.episodes[i].imageurl + ")"
                    
                }
            })
        }
        
    },
    
    template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <h1> P3 Dokumentär avsnitt </h1>
        <div class="flex-container" id="docu">
        </div>
     </div>
 </div>` 
}
