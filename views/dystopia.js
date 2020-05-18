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

// `<div class="outerdiv">
//      <div class="innerdiv">
//      <h1> Radio channels </h1>
//      <div class="flex-container">
//         <div class="p1"><img class="playbtn" src="../images/playbtn.png" @click="play(1)"></div>
//         <div class="p2"><img class="playbtn" src="../images/playbtn.png" @click="play(2)"></div>
//         <div class="p3"><img class="playbtn" src="../images/playbtn.png" @click="play(3)"></div>  
//         <div class="p4"><img class="playbtn" src="../images/playbtn.png" @click="play(4)"></div>  
//      </div>
//      </div>
//  </div>`