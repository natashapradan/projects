<template>
  <div id="app">
    <!--<h1>hl</h1>-->

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
      <transition>
        <router-view></router-view>
      </transition>
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
            return {}
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
