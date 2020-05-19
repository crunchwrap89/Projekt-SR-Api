
export default {
    template:
        `<div class="outerdiv">
         <div class="innerdiv">
            
            <h1>Gamla sändningar</h1>
            <div class="flex-container">
                  <div class="n4">
                  <router-link to="/ekonomiEkot">Ekonomiekot</router-link>
                  </div>
                  <div class="n3">
                  <router-link to="/radiosporten">Radiosporten</router-link>
                  </div>
                  <div class="n5">
                  <router-link to="/samiskaNyheter">Samiska Nyheter</router-link>
                  </div>
                  <div class="n2">
                  <router-link to="/radiofinska">Finska Nyheter</router-link>
                  </div>
                  <div class="n1">
                  <router-link to="/kulturnytt">Kulturnytt</router-link>
                  </div>
              </div>
              <h1>Podcasts</h1>
              <div class="flex-container2">
                  <div>
                  <router-link to="/dystopia">P3 Dystopia</router-link>
                  </div>
                  <div>
                  <router-link to="/dokumentar">P3 Dokumentär</router-link>
                  </div>
              </div>
         </div>
     </div>` }