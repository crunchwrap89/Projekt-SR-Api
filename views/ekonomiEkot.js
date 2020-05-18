import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getEkonomiEko()
    },
    methods: {
        getEkonomiEko() {
            let outerdiv = document.getElementById('superId')
            let d = EventService.getEkonomiEko()
            let l = document.getElementById("ljudspelare")
            let img = document.getElementById("nuspelas")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('div')
                    p.innerText = result.episodes[i].title
                    p.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)
                      } );
                    outerdiv.appendChild(p)
                }
            })
        }        
    },  
    template: 
`<div class="outerdiv" id="superId">
     <div class="innerdiv">
     </div>
 </div>` 
}