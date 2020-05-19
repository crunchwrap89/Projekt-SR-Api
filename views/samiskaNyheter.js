import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getSamiskaNyheter()
    },
    methods: {
        getSamiskaNyheter() {
            let roffel = document.getElementById('nyttId')
            let d = EventService.getSamiskaNyheter()
            let l = document.getElementById("ljudspelare")
            let img = document.getElementById("nuspelas")
            d.then(function (result) {
                console.log(result.episodes[1].broadcast.broadcastfiles[0].url)
                for(let i = 0; i < result.episodes.length; i++) {
                    let div = document.createElement('div')
                    try {
                        div.innerText = result.episodes[i].downloadpodfile.title
                        div.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    } catch {
                        div.innerText = result.episodes[i].title
                        div.addEventListener( 'click', function(){
                            l.setAttribute("src", result.episodes[i].broadcast.broadcastfiles[0].url)
                            img.setAttribute("src", result.episodes[i].imageurl)
                          } );
                    }
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
          <h1> Samiska nyheter </h1>
      <div class="flex-container" id="nyttId">
      </div>
    </div>
</div>` 
}