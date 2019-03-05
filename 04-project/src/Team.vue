<template>
  <div id="projects">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        <i class="fas fa-cat"></i>
        <router-link to="/home" class="text-white">
          <div>Fluffy Dev</div>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/projects" class="text-white"><b>Projects</b></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/team" class="text-white"><b>Team</b></router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <!--<b-navbar-nav class="ml-auto">-->
        <!--<dropdown-options variant="secondary" :options="languages" optionKey="title" v-model="$i18n.locale"-->
        <!--optionValue="language"/>-->
        <!--</b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
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
