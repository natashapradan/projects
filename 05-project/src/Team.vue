<template>
  <div id="team">
    <b-row class="m-4">
      <b-col md="4">
        <div class="text-white">
          <b-card
              title="COO: Mr. Fluffy"
              img-src="/src/assets/images/1.jpg"
              img-alt="Mr. Fluffy"
              img-top
              tag="article"
              class="mb-2"
          >
            <b-card-text>
              Mr. Fluffy has vast experience of more than two decades in designing and constructing residential
              complexes of varying scale. His
              honed skills and outstanding creativity embody the vision of Fluffy Dev.
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col md="4">
        <div class="text-white">
          <b-card
              title="Chief Engineer: Mr. Whiskers"
              img-src="/src/assets/images/2.jpg"
              img-alt="Mr. Whiskers"
              img-top
              tag="article"
              class="mb-2"
          >
            <b-card-text>
              Mr. Whiskers is the major responsible figure for bringing your dreams into reality. He knows how to make
              your future home smart and safe. Every technical solution implemented in our houses gets done only
              through his approval.
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col md="4">
        <div class="text-white">
          <b-card
              title="Director: Mr. Fancy"
              img-src="/src/assets/images/3.jpg"
              img-alt="Mr. Fancy"
              img-top
              tag="article"
              class="mb-1"
          >
            <b-card-text>
              Mr. Fancy is a creative and innovative director ready to listen to his employees and overview all the
              details of construction, design and promotion. He takes care of the vision of Fluffy Dev and makes sure
              our houses are the best ones on the market.
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">

    </b-row>

  </div>
</template>

<script>
    import DropdownOptions from "./components/DropdownOptions.vue";

    export default {
        name: 'projects',
        components: {DropdownOptions},
        data() {
            return {
                title: 'projects'
            }
        }
    }
</script>

<style>
  #projects {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
