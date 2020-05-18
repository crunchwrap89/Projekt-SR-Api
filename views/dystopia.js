import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getDystopia()
    },
    methods: {
        getDystopia() {
            let roffel = document.getElementById('superId')
            let d = EventService.getDystopia()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById("ljudspelare")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let div = document.createElement('div')
                    div.innerText = result.episodes[i].title
                    
                    div.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)

                      } );
                      div.className="dAvsnitt"
                      roffel.appendChild(div)
                    
                }
            })
        }
        
    },
    
    template: 
`<div class="outerdiv">
     <div class="innerdiv">
           <h1> Dystopia avsnitt </h1>
       <div class="flex-container" id="superId">
       </div>
     </div>
 </div>` 
}
