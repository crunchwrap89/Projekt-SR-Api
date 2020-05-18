import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getKulturnytt()
    },
    methods: {
        getKulturnytt() {
            let outerdiv = document.getElementById('nyttId1')
            let d = EventService.getKulturnytt()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById("ljudspelare")   
            d.then(function (result) {
                console.log(result.episodes[1].broadcast.broadcastfiles[0].url)
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('div')
                    try {
                        p.innerText = result.episodes[i].downloadpodfile.title
                        p.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    } catch {
                        p.innerText = result.episodes[i].title
                        p.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].broadcast.broadcastfiles[0].url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    }
                    outerdiv.appendChild(p)
                }
            })
        }        
    },  
    template: 
`<div class="outerdiv" id="nyttId1">
     <div class="innerdiv">
     </div>
 </div>` 
}