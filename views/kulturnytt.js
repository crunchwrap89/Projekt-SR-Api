import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getKulturnytt()
    },
    methods: {
        getKulturnytt() {
<<<<<<< HEAD
            let roffel = document.getElementById('nyttId')
=======
            let outerdiv = document.getElementById('nyttId1')
>>>>>>> aa30ceb05905aebdb8484ff7317b4d27e2105fbc
            let d = EventService.getKulturnytt()
            let img = document.getElementById("nuspelas")
            let l = document.getElementById("ljudspelare")   
            d.then(function (result) {
                console.log(result.episodes[1].broadcast.broadcastfiles[0].url)
                for(let i = 0; i < result.episodes.length; i++) {
<<<<<<< HEAD
                    let div = document.createElement('div')
                    div.innerText = result.episodes[i].downloadpodfile.title
                    div.addEventListener( 'click', function(){
                        l.setAttribute("src", result.episodes[i].downloadpodfile.url)
                        img.setAttribute("src", result.episodes[i].imageurl)
                      } );
                    div.className="dAvsnitt"
                    div.style.backgroundImage="url(" + result.episodes[i].imageurl + ")"
                    roffel.appendChild(div)
=======
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
>>>>>>> aa30ceb05905aebdb8484ff7317b4d27e2105fbc
                }
            })
        }        
    },  
    template: 
<<<<<<< HEAD
    `<div class="outerdiv">
    <div class="innerdiv">
          <h1> Kulturnytt avsnitt </h1>
      <div class="flex-container" id="nyttId">
      </div>
    </div>
</div>`
=======
`<div class="outerdiv" id="nyttId1">
     <div class="innerdiv">
     </div>
 </div>` 
>>>>>>> aa30ceb05905aebdb8484ff7317b4d27e2105fbc
}