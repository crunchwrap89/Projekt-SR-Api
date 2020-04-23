import EventService from '../services/EventService.js'

export default {
    
    methods: {
        playP1() {
            this.update(EventService.p1())
        },
        playP2() {
            this.update(EventService.p2())
        },
        playP3() {
            this.update(EventService.p3())
        },
        playP4() {
            this.update(EventService.p4())
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="playP1" value="P1">
                    <input type="button" @click="playP2" value="P2">
                    <input type="button" @click="playP3" value="P3">
                    <input type="button" @click="playP4" value="P4">
                </div>
               </div>`
}