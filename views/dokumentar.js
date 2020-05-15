import EventService from "../services/EventService.js"

export default {
    created() {
        this.fetchData()
   },
   watch: {
        $route(to, from) {
             this.fetchData()
        },
   },
    methods: {
        fetchData() {
            this.getDocumentaries()
        },

        getDocumentaries() {
            let outerdiv = document.getElementById('kuk')
            let d = EventService.getDocumentaries()

            d.then(function (result) {
                for(let i = 0; result.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result[i].title
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