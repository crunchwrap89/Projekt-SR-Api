import EventService from '../services/EventService.js'

export default {
    data() {
        return {
            titles: []
        }

    },

    methods: {
        showNewsPrograms() {
            
            let e = EventService.showNewsPrograms()
            e.then(function (result) {
               console.log(result.length)
              // let titles = []
                for(let i = 0; i < result.length; i++) {
                    this.titles.push(result[i].program.name)
                }
               // console.log(titles)
            })
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <ul>
                        <li v-for="item in titles">{{item}}</li>
                    </ul>
                </div>
               </div>`
}