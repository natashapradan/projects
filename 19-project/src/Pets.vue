<template>
  <div class="d-flex flex-row flex-wrap">
    <b-card
        v-for="pet in pets"
        :title="pet.title"
        :img-src="pet.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
        class="m-2"
    >
      <router-link :to="{ path: '/pets/' + pet.id}" class="btn btn-primary btn-block mt-2">
        Get to Know Them
      </router-link>
    </b-card>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'pets',
    data() {
      return {
        title: 'pets',
        pets: [
          {id: '1', route: '1'},
          {id: '2', route: '2'},
          {id: '3', route: '3'}
        ]
      }
    },
    async created() {
      const response = await axios.get('http://localhost:3000/pets')
      this.pets = response.data;
    }
  }
</script>


