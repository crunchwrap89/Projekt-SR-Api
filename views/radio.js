export default { template: `<div class="outerdiv">
                            <nav>
                              <router-link tag="ul" class="col" class-active="active" to="/">Home</router-link>
                              <router-link tag="ul" class="col" class-active="active" to="/radio">Radio</router-link>
                              <router-link tag="ul" class="col" class-active="active" to="/about">About</router-link>
                            </nav>
                              <h1>Radio</h1>
                            <div class="innerdiv">
                              <action-bar></action-bar>
                              <audio id="ljudspelare" autoplay="" controls="" style="height: 40px; width: 66%;"></audio>
                            </div>
                          </div>` }