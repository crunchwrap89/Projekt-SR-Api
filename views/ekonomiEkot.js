import EventService from "../services/EventService.js"

export default {
    mounted() {
        this.getEkonomiEkot()
    },
    methods: {
        getEkonomiEkot() {
            let outerdiv = document.getElementById('nyttId')
            let d = EventService.getEkonomiEkot()
            let l = document.getElementById("ljudspelare")
            let img = document.getElementById("nuspelas")
            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('div')
                    let titeln = result.episodes[i].downloadpodfile.title
                    p.innerText = titeln
                    if (p.innerText.charAt(10) === "t") {
                        p.innerText = titeln.slice(0, 10) + titeln.slice(11, titeln.length)
                    }                     
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
`<div class="outerdiv" id="nyttId">
     <div class="innerdiv">
     </div>
 </div>` 
}