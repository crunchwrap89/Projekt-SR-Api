import EventService from "../services/EventService"

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
            let container = document.getElementsByClassName('outerdiv')[0]
            let d = EventService.getDocumentaries()

            d.then(function (result) {
                for(let i = 0; result.podfiles.length; i++) {
                    let p = document.createElement('p')
                    p.innerText = result.podfiles[i].title
                    container.appendChild(p)
                }
            })
        }
        
    },
    template: 
`<div class="outerdiv">
     <div class="innerdiv">
     </div>
 </div>` 
}