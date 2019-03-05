<template>
  <div id="app">
    <!--<h1>hl</h1>-->
    <transition>
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    import DropdownOptions from "./components/DropdownOptions.vue";

    export default {
        name: 'app',
        components: {DropdownOptions},
        data() {
            return {
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
