<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">

        <router-link to="/home" class="text-white">
          <div><strong><i class="fas fa-coins"></i> FundRaiser</strong></div>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse" class="justify-content-between">
        <b-navbar-nav mr-auto>
          <b-nav-item>
            <router-link to="/europe" class="text-white"><b>Europe</b></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/us" class="text-white"><b>US</b></router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/ukraine" class="text-white"><b>Ukraine</b></router-link>
          </b-nav-item>
          <b-nav-item
              href="https://cofounderslab.com/search?country=Ukraine&city=Kyiv&use_defaults=0&q=&rsp=false&rcm=false&p=0"
              class="text-white"><b>Find Co-Founders</b>
          </b-nav-item>
        </b-navbar-nav>
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

  export default {
    name: 'app',
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
