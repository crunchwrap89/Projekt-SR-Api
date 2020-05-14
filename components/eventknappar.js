import EventService from '../services/EventService.js'

export default {
    methods: {
        playP1() {
            let p = document.getElementById("ljudspelare")
            let i = document.getElementById("nuspelas")
            let e = EventService.playP1()
            e.then(function (result) {
                p.setAttribute("src", result.liveaudio.url)
                i.setAttribute("src", result.image)
            })
        },
        playP2() {
            EventService.playP2()
            let p = document.getElementById("ljudspelare")
            let e = EventService.playP2()
            e.then(function (result) {
                p.setAttribute("src", result.liveaudio.url)
            })
        },
        playP3() {
            let p = document.getElementById("ljudspelare")
            let e = EventService.playP3()
            e.then(function (result) {
                p.setAttribute("src", result.liveaudio.url)
            })
        },
        playP4() {
            let p = document.getElementById("ljudspelare")
            let e = EventService.playP4()
            e.then(function (result) {
                p.setAttribute("src", result.liveaudio.url)
            })
        },
        songListP1() {
            let p = document.getElementById("ljudspelare")
            let e = EventService.songListP1()
            e.then(function (result) {
                p.setAttribute("src", result)
            })
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="songListP1" value="Låt från P1">
                    <input type="button" @click="playP1" value="Radio P1">
                    <input type="button" @click="playP2" value="Radio P2">
                    <input type="button" @click="playP3" value="Radio P3">
                    <input type="button" @click="playP4" value="Radio P4">
                </div>
               </div>`
}