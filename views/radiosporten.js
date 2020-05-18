import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getRadiosport()
    },
    methods: {
        getRadiosport() {
            let outerdiv = document.getElementById('superId')
            let d = EventService.getRadiosport()
            let l = document.getElementById("ljudspelare")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('div')
                    p.innerText = result.episodes[i].downloadpodfile.title
                    p.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].downloadpodfile.url)
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