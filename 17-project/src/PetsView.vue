<template>
  <div v-if="pet" class="d-flex flex-row flex-wrap">
    <b-card
        v-for="representative in pet.representatives"
        :title="representative.name"
        :img-src="representative.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white;"
        class="m-2"
    >
      <div v-if="!representative.kitten">
        <p><strong>Age:</strong> <em>{{ representative.age }} year(s)</em></p>
      </div>
      <div v-else>
        <p><strong>Age:</strong> <em>{{ representative.age }} month(s)</em></p>
      </div>

      <p><strong>Color:</strong> <em>{{ representative.color }} </em></p>
      <h6>{{ representative.features }}</h6>

      <router-link :to="{ path: '/contact'}" class="btn btn-primary btn-block mt-4">
        Arrange a Meeting
      </router-link>

    </b-card>
  </div>

</template>

<script>
  import axios from "axios"

  export default {
    name: 'representative',
    data() {
      return {
        title: 'representative',
        pet: {representative: []}
      }
    },
    async created() {

      const response = await axios.get('http://localhost:3000/pets/' + this.$route.params.id)
      this.pet = response.data;
    }
  }
  //
</script>


