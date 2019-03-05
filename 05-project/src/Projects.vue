<template>
  <div id="projects">
    <div class="d-flex flex-row flex-wrap">
      <b-card
          v-for="project in projects"
          :title="project.title"
          :sub-title="project.address"
          :img-src="project.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; border: 1px solid white;"
          class="m-2"
          text-variant="white"
      >
        <b-card-text>
          <p>Distance to the center: <i class="fas fa-car"></i> {{ project.distance }} min</p>
          <p>Number of floors: <strong>{{ project.floors }}</strong></p>
          <p>Price per square meter: <h4>{{ project.price }} CT$</h4></p>
        </b-card-text>

        <b-button block href="#" variant="primary">More info</b-button>
      </b-card>
    </div>
    <!--<div class="mapouter">-->
      <!--<div class="gmap_canvas">-->
        <!--<iframe width="auto" height="300" id="gmap_canvas"-->
                <!--src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"-->
                <!--frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>-->
        <!--&lt;!&ndash;<a href="https://www.pureblack.de">pure black</a>&ndash;&gt;-->
      <!--</div>-->

      <!--.gmap_canvas {-->
      <!--overflow: hidden;-->
      <!--background: none !important;-->
      <!--height: 700px;-->
      <!--width: 1200px;-->
      <!--}-->
    <!--</div>-->
  </div>
</template>

<script>
    import DropdownOptions from "./components/DropdownOptions.vue";
    import axios from "axios"

    export default {
        name: 'projects',
        // components: {DropdownOptions},
        data() {
            return {
                title: 'projects',
                projects: [
                    {id: 'Foo'},
                    {id: 'Bar'}
                ]
            }
        },
        async created() {
            const response = await axios.get('http://localhost:3000/projects')
            this.projects = response.data;
        }
    }
    //
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
