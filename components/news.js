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
            e.then((result) => {
                this.titles.push(result[0].program.name)
                this.titles.push(result[27].program.name)
                this.titles.push(result[28].program.name)
                this.titles.push(result[29].program.name)
                this.titles.push(result[32].program.name)

                console.log(this.titles)
            })
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                <input type="button" @click="showNewsPrograms" value="test">
                    <ul>
                        <li v-for="item in titles">{{item}}</li>
                    </ul>
                </div>
               </div>`
}