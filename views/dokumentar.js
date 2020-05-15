import EventService from "../services/EventService.js"

export default {
  
    methods: {
        getDocumentaries() {
            let outerdiv = document.getElementById('kuk')
            let d = EventService.getDocumentaries()

            d.then(function (result) {
                for(let i = 0; i < result.podfiles.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result.podfiles[i].title
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