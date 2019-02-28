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
            {{ $t('seeds') }}
          </b-nav-item>
          <b-nav-item href="https://www.theknot.com/real-weddings/gardenia-wedding-bouquets-photos" target="_blank">
            {{ $t('bouquets') }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <dropdown-options :options="languages" optionKey="title" v-model="$i18n.locale" optionValue="language"/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <!--<div class="m-4">-->
      <!--<b-jumbotron bg-variant="info" text-variant="white" border-variant="dark"-->
      <!--header="Best Secrets of Growing Gardenias" lead="Learn How to Care for Them">-->
      <!--</b-jumbotron>-->
      <!--</div>-->
      <h1 class="text-center mb-4 mt-4">{{ $t('question') }}</h1>
      <b-container class="container-fluid">
        <b-row>
          <b-col md="4">
            <div>
              <b-card
                  :title="$t('firstTitle')"
                  img-src="/src/assets/gardenia-1617870-1919x1279.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  {{ $t('firstArticle') }}
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  :title="$t('secondTitle')"
                  img-src="/src/assets/gardenia.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  {{ $t('secondArticle') }}
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <b-card
                  :title="$t('thirdTitle')"
                  img-src="/src/assets/gardenias-gardenia-flowers-on-stem-bouquet-mimi-giboin-014-copy-1466x977.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
              >
                <b-card-text>
                  {{ $t('thirdArticle') }}
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
          img-src="/src/assets/gardenia-resized-58a47c093df78c475875b066.jpg"
          />

          <b-carousel-slide
              img-src="/src/assets/augusty-beauty-gardenia-1.jpg"/>

          <b-carousel-slide
              img-src="/src/assets/gardenialeadcropped1200x675.jpg"/>

        </b-carousel>
      </div>
      <footer>
        <p>{{ $t('postedBy') }} {{ $t('myName') }}</p>
        <p>{{ $t('contactInfo') }} <a href="mailto:natasha.pradan@gmail.com">
          {{ $t('email') }}</a></p>
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
