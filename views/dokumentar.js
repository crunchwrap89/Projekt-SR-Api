import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getDocumentaries()

    },

    methods: {
    
    
        getDocumentaries() {
            let outerdiv = document.getElementById('kuk')
            let d = EventService.getDocumentaries()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById('ljudspelare')
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result.episodes[i].title
                    p.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].listenpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)
                        

                      } );
                    outerdiv.appendChild(p)
                    
                }
            })
        }
        
    },
    
    template: 
`<div class="outerdiv" id="kuk">
     <div class="innerdiv">
     </div>
 </div>` 
}