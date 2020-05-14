import EventService from '../services/EventService.js'

export default {
     methods: {
          play(radiokanal) {
               let p = document.getElementById("ljudspelare")
               let i = document.getElementById("nuspelas")
               let e = EventService.play(radiokanal)
               // if (radiokanal === 1) {
               //      e = EventService.playP1()
               // }
               // if (radiokanal === 2) {
               //      e = EventService.playP2()
               // }
               // if (radiokanal === 3) {
               //       e = EventService.playP3()
               // }
               // if (radiokanal === 4) {
               //       e = EventService.playP4()
               // }
               e.then(function (result) {
                   p.setAttribute("src", result.liveaudio.url)
                   i.setAttribute("src", result.image)
               })
           },
      },
     template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <div class="flex-container">
        <div class="p1">Radio P1 <img class="playbtn" src="../images/playbtn.png" @click="play(p1)"></div>
        <div class="p2">Radio P2 <img class="playbtn" src="../images/playbtn.png" @click="play(p2)"></div>
        <div class="p3">Radio P3 <img class="playbtn" src="../images/playbtn.png" @click="play(p3)"></div>  
        <div class="p4">Radio P4 <img class="playbtn" src="../images/playbtn.png" @click="play(p4)"></div>
        <div>LocalNewZ</div>
        <div>LocalNewZ6</div>  
        <div>LocalNewZ7</div>
        <div>LocalNewZ8</div>
        <div>LocalNewZ9</div>  
        <div>LocalNewZ10</div>
        <div>LocalNewZ11</div>
        <div>LocalNewZ12</div>  
   </div>
     </div>
 </div>` }