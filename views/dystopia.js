import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getDystopia()
    },
    methods: {
        getDystopia() {
            let outerdiv = document.getElementById('superId')
            let d = EventService.getDystopia()
            let l = document.getElementById("ljudspelare")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result.episodes[i].title
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