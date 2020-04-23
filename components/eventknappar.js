import EventService from '../services/EventService.js'

export default {
    
    methods: {
        playP1() {
            EventService.playP1()
                .then(url => this.$emit('url', url))
        },
        playP2() {
            EventService.playP2()
                .then(url => this.$emit('url', url))
        },
        playP3() {
            EventService.playP3()
                .then(url => this.$emit('url', url))
        },
        playP4() {
            EventService.playP4()
                .then(url => this.$emit('url', url))
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="playP1" value="Radio P1">
                    <input type="button" @click="playP2" value="Radio P2">
                    <input type="button" @click="playP3" value="Radio P3">
                    <input type="button" @click="playP4" value="Radio P4">
                </div>
               </div>`
}