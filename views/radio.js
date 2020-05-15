import EventService from '../services/EventService.js'



export default {  
     methods: {    
          play(radiokanal) {
               let p = document.getElementById("ljudspelare")
               let i = document.getElementById("nuspelas")
               let e = EventService.play(radiokanal)
               e.then(function (result) {
                   p.setAttribute("src", result.channel.liveaudio.url)
                   i.setAttribute("src", result.channel.image)
               })
           },
      },
     template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <div class="flex-container">
        <div class="p1"><img class="playbtn" src="../images/playbtn.png" @click="play(1)"></div>
        <div class="p2"><img class="playbtn" src="../images/playbtn.png" @click="play(2)"></div>
        <div class="p3"><img class="playbtn" src="../images/playbtn.png" @click="play(3)"></div>  
        <div class="p4"><img class="playbtn" src="../images/playbtn.png" @click="play(4)"></div>  
     </div>
     </div>
 </div>` }