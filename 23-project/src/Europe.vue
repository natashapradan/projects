<template>
  <div class="d-flex flex-row flex-wrap">
    <b-card
        v-for="europeanCountry in europeanCountries"
        :title="europeanCountry.title"
        :img-src="europeanCountry.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
        class="m-3"
    >
      <strong>{{ europeanCountry.description }}</strong>
      <router-link :to="{ path: '/europe/' + europeanCountry.id}" class="btn btn-primary btn-block mt-2">
        Opportunities
      </router-link>
    </b-card>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'europe',
    data() {
      return {
        title: 'europe',
        europeanCountries: [
          {id: '1', route: '1'},
          {id: '2', route: '2'},
          {id: '3', route: '3'}
        ]
      }
    },
    async created() {
      const response = await axios.get('http://localhost:3000/europeanCountries')
      this.europeanCountries = response.data;
    }
  }
</script>


