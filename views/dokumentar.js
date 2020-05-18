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
                    roffel.appendChild(div)
                    div.className="dAvsnitt"
                    
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

// `<div class="outerdiv">
//      <div class="innerdiv">
//            <h1> Dystopia avsnitt </h1>
//        <div class="flex-container" id="superId">
//        </div>
//      </div>
//  </div>` 