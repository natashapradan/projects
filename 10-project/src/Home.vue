<template>
  <div>
    <h1 class="text-center mb-4 mt-4 text-white">Why choose us?</h1>
    <b-container class="container-fluid">
      <b-row class="mt-2">
        <b-col>
          <img src="./assets/images/holding-icon-2.png">
          <h2 class="text-white">3 residential complexes</h2>
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
                img-src="/src/assets/images/experienced.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 text-white"
            >

                We have built small and enormous residential complexes in different neighborhoods. We have tried both
                traditional approaches and innovative solutions and have developed a successful blend of them.

            </b-card>
          </div>
        </b-col>
        <b-col md="4">
          <div>
            <b-card
                title="Becoming a homeowner has never been simpler"
                img-src="/src/assets/images/fun.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 text-white"
            >

                With us it is fun: just choose yourself a suitable flat and we will take care of everything else. Just
                have fun and worry of nothing.
            </b-card>
          </div>
        </b-col>
        <b-col md="4">
          <div>
            <b-card
                title="Innovative solutions"
                img-src="/src/assets/images/smart.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 text-white"
            >
                Our construction and design decisions have earned us the trust of prospective homeowners. We strictly
                adhere to the principle of smart homes and continuously work on improving our houses.
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
  </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {}
        }
    }
</script>

<style>
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
