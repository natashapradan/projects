<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img class="d-none d-md-block" src="/src/assets/Sed-41-512-2.png" style="max-height: 40px">
      <b-navbar-brand href="#">
        <div class="ml-2">Bloomy Gardenias</div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
              href="https://bestseedsonline.com/10pcs-gardenia-seeds-cape-jasmine/?gclid=CjwKCAiAqt7jBRAcEiwAof2uKySIYDbFmKomdVzi2bdFc0zwybVEFoN2ag0sWrR1rvP-VCRVa8TqCRoCfDEQAvD_BwE"
              target="_blank">
            Seeds
          </b-nav-item>
          <b-nav-item href="https://www.theknot.com/real-weddings/gardenia-wedding-bouquets-photos" target="_blank">
            Bouquets
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <!--<div class="m-4">-->
      <!--<b-jumbotron bg-variant="info" text-variant="white" border-variant="dark"-->
      <!--header="Best Secrets of Growing Gardenias" lead="Learn How to Care for Them">-->
      <!--</b-jumbotron>-->
      <!--</div>-->
      <h1 class="text-center mb-4 mt-4">Why choose gardenias?</h1>
      <b-container class="container-fluid">
        <b-row>
          <b-col md="4">
            <div>
              <b-card
                  title="The Capricious Beauty"
                  img-src="/src/assets/gardenia-1617870-1919x1279.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  Gardenia jasminoides (syn. G. grandiflora, G. Florida) is cultivated as a house plant. This species
                  can be difficult to grow because it originated in warm humid tropical areas. It demands high humidity
                  to thrive, and bright (not direct) light. It flourishes in acidic soils with good drainage and thrives
                  on [68-74 F temperatures (20-23 C)] during the day and 60 F (15-16 C) in the evening. Potting soils
                  developed especially for gardenias are available. G. jasminoides grows no larger than 18 inches in
                  height and width when grown indoors. In climates where it can be grown outdoors, it can attain a
                  height of 6 feet. If water touches the flowers, they will turn brown.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  title="The Favorite of Prominent People"
                  img-src="/src/assets/gardenia.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  In France, gardenias are the flower traditionally worn by men as boutonnière when in evening dress. In
                  The Age of Innocence, Edith Wharton suggests it was customary for upper-class men from New York City
                  to wear a gardenia in their buttonhole during the Gilded Age. Sigmund Freud remarked to the poet H.D.
                  that gardenias were his favorite flower. Hattie McDaniel famously wore gardenias in her hair when she
                  accepted an Academy Award, the first for
                  an African American, for Gone With The Wind. Mo'Nique Hicks later wore gardenias in her hair when she
                  won her Oscar as a tribute to McDaniels.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  title="The Summer Jewel"
                  img-src="/src/assets/gardenias-gardenia-flowers-on-stem-bouquet-mimi-giboin-014-copy-1466x977.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  They are evergreen shrubs and small trees growing to 1–15 metres (3.3–49.2 ft) tall. The leaves are
                  opposite or in whorls of three or four, 5–50 centimetres (2.0–19.7 in) long and 3–25 centimetres
                  (1.2–9.8 in) broad, dark green and glossy with a leathery texture. The flowers are solitary or in
                  small clusters, white, or pale yellow, with a tubular-based corolla with 5–12 lobes (petals) from 5 to
                  12 centimetres (2.0 to 4.7 in) diameter. Flowering is from about mid-spring to mid-summer, and many
                  species are strongly scented.
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
          <b-carousel-slide img-src="/src/assets/gardenia-1617870-1919x1279.jpg"
          />

          <b-carousel-slide
              img-src="/src/assets/gardenias-gardenia-flowers-on-stem-bouquet-mimi-giboin-014-copy-1466x977.jpg">
          </b-carousel-slide>

          <b-carousel-slide img-src="/src/assets/gardenia-resized-58a47c093df78c475875b066.jpg"/>

        </b-carousel>
      </div>
      <footer>
        <p>Posted by: Natalia Pradan</p>
        <p>Contact information: <a href="mailto:natasha.pradan@gmail.com">
          natasha.pradan@gmail.com</a>.</p>
      </footer>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
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
