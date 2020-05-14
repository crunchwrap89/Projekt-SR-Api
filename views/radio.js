import EventService from '../services/EventService.js'

export default {
     data () {
          return {
            loading: false,
            post: null,
            error: null
          }
        },
        created () {
          // fetch the data when the view is created and the data is
          // already being observed
          this.fetchImages()
        },
     methods: {

          fetchImages () {
               this.error = this.post = null
               this.loading = true
               
               this.play(1)

          },

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
                   p.setAttribute("src", result.channel.liveaudio.url)
                   i.setAttribute("src", result.channel.image)
               })
           },
      },
     template: 
`<div class="outerdiv">
     <div class="innerdiv">
     <div class="flex-container">
        <div class="p1">Radio P1 <img class="playbtn" src="../images/playbtn.png" @click="play(1)"></div>
        <div class="p2">Radio P2 <img class="playbtn" src="../images/playbtn.png" @click="play(2)"></div>
        <div class="p3">Radio P3 <img class="playbtn" src="../images/playbtn.png" @click="play(3)"></div>  
        <div class="p4">Radio P4 <img class="playbtn" src="../images/playbtn.png" @click="play(4)"></div>
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