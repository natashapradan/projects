<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        <i class="fas fa-cat"></i>
        <div>Fluffy Dev</div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item><b>Projects</b></b-nav-item>
          <b-nav-item><b>Team</b></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <!--<b-navbar-nav class="ml-auto">-->
        <!--<dropdown-options variant="secondary" :options="languages" optionKey="title" v-model="$i18n.locale"-->
        <!--optionValue="language"/>-->
        <!--</b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <!--<div class="m-4">-->
      <!--<b-jumbotron bg-variant="info" text-variant="white" border-variant="dark"-->
      <!--header="Best Secrets of Growing Gardenias" lead="Learn How to Care for Them">-->
      <!--</b-jumbotron>-->
      <!--</div>-->
      <h1 class="text-center mb-4 mt-4 text-white">Why choose us?</h1>
      <b-container class="container-fluid">
        <b-row class="mt-2">
          <b-col>
            <img src="./assets/images/holding-icon-2.png">
            <h2 class="text-white">5 residential complexes</h2>
          </b-col>
          <b-col>
            <img src="./assets/images/holding-icon-1.png" style="max-height: 140px">
            <h2 class="text-white mt-2">6 years of building</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-row class="mt-2 justify-content-center"><img src="./assets/images/holding-icon-5.png"></b-row>
            <h2 class="text-white">12,000 homeowners</h2>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col md="4">
            <div>
              <b-card
                  title="We have tried it all"
                  img-src="/dist/experienced.png"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2 text-white"
              >
                <b-card-text>
                  We have built small and enormous residential complexes in different neighborhoods. We have tried both
                  traditional approaches and innovative solutions and have developed a successful blend of them.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  title="Becoming a homeowner has never been simpler"
                  img-src="/dist/fun.png"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2 text-white"
              >
                <b-card-text>
                  With us it is fun: just choose yourself a suitable flat and we will take care of everything else. Just
                  have fun and worry of nothing.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  title="Innovative solutions"
                  img-src="/dist/smart.png"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2 text-white"
              >
                <b-card-text>
                  Our construction and design decisions have earned us the trust of prospective homeowners. We strictly
                  adhere to the principle of smart homes and continuously work on improving our houses.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
        </b-row>

      </b-container>
      <div class="m-4">
        <b-carousel
            id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            :interval="4000"
            img-width="1024"
            img-max-height="480"
            v-model="slide"
        >

          <b-carousel-slide
              img-src="/src/assets/images/afford5.jpg"/>

          <b-carousel-slide
              img-src="/src/assets/images/afford14.jpg"/>
          <b-carousel-slide
              img-src="/src/assets/images/afford4.jpg"
          />

        </b-carousel>
      </div>
      <footer class="text-primary">
        <p><span class="text-white">Posted by:</span> Natalia Pradan</p>
        <p><span class="text-white">Contact info:</span> <a href="mailto:natasha.pradan@gmail.com">natasha.pradan@gmail.com</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
    import DropdownOptions from "./components/DropdownOptions.vue";

    export default {
        name: 'app',
        components: {DropdownOptions},
        data() {
            return {
                languages: [
                    {language: 'en', title: 'English'},
                    {language: 'es', title: 'Español'},
                    {language: 'ru', title: 'Русский'}
                ]
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
