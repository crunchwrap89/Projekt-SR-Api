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
              let p = document.getElementById("ljudspelare")
              let i = document.getElementById("nuspelas")
              let e = EventService.playP2()
              e.then(function (result) {
                  p.setAttribute("src", result.liveaudio.url)
                  i.setAttribute("src", result.image)
              })
          },
          playP3() {
              let p = document.getElementById("ljudspelare")
              let i = document.getElementById("nuspelas")
              let e = EventService.playP3()
              e.then(function (result) {
                  p.setAttribute("src", result.liveaudio.url)
                  i.setAttribute("src", result.image)
              })
          },
          playP4() {
              let p = document.getElementById("ljudspelare")
              let i = document.getElementById("nuspelas")
              let e = EventService.playP4()
              e.then(function (result) {
                  p.setAttribute("src", result.liveaudio.url)
                  i.setAttribute("src", result.image)
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
     template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <div class="flex-container">
        <div class="p1">Radio P1 <input type="button" @click="playP1" value="Radio P1"></div>
        <div class="p2">Radio P2</div>
        <div class="p3">Radio P3</div>  
        <div class="p4">Radio P4</div>
        <div>LocalNewZ</div>
        <div>LocalNewZ6</div>  
        <div>LocalNewZ7</div>
        <div>LocalNewZ8</div>
        <div>LocalNewZ9</div>  
        <div>LocalNewZ10</div>
        <div>LocalNewZ11</div>
        <div>LocalNewZ12</div>  
   </div>
        <div class="hogerdiv">
          <action-bar></action-bar>
        </div>
     </div>
 </div>` }