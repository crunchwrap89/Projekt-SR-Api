import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getDocumentaries()

    },

    methods: {
    
    
        getDocumentaries() {
            let roffel = document.getElementById('kuk')
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
                    roffel.appendChild(div)
                    div.style.backgroundImage="url(" + result.episodes[i].imageurl + ")"
                    
                }
            })
        }
        
    },
    
    template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <h1> P3 Dokumentär avsnitt </h1>
        <div class="flex-container" id="kuk">
        </div>
     </div>
 </div>` 
}
