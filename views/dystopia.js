import EventService from "../services/EventService.js"

export default {

    methods: {
    mounted() {
        this.getDystopia()
    },
        getDystopia() {
            let outerdiv = document.getElementById('superId')
            let d = EventService.getDystopia()

            d.then(function (result) {
                for(let i = 0; i < result.episodes.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result.episodes[i].title
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