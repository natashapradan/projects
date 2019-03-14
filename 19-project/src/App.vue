<template>
  <div id="app">
    <!--<h1>hl</h1>-->

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">

        <router-link to="/home" class="text-white">
          <div><strong><i class="fas fa-paw"></i> FatCat</strong></div>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse" class="justify-content-between">
        <b-navbar-nav mr-auto>
          <b-nav-item>
            <router-link to="/pets" class="text-white"><b>Find a Fluffy Friend</b></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/categories" class="text-white"><b>Treat Your Cat</b></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contact" class="text-white"><b>Contact Us</b></router-link>
          </b-nav-item>

        </b-navbar-nav>
        <!--<b-navbar-nav ml-auto>-->
          <!--<b-nav-item>-->
            <!--<router-link to="/add" class="text-white"><b>Add New Project</b></router-link>-->
          <!--</b-nav-item>-->
        <!--</b-navbar-nav>-->

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
      <footer class="footer text-primary">
        <p><span>Posted by:</span> Natalia Pradan</p>
        <p><span>Contact info:</span> <a href="mailto:natasha.pradan@gmail.com">natasha.pradan@gmail.com</a>
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
