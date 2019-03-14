<template>
  <div class="d-flex flex-row flex-wrap">
    <b-card
        v-for="category in categories"
        :title="category.title"
        :img-src="category.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
        class="m-2"
    >
      <strong>{{ category.description }}</strong>
      <router-link :to="{ path: '/categories/' + category.id + '/products'}" class="btn btn-primary btn-block mt-2">
        Go Shopping
      </router-link>
    </b-card>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'categories',
    data() {
      return {
        title: 'categories',
        categories: [
          {id: '1', route: '1'},
          {id: '2', route: '2'},
          {id: '3', route: '3'}
        ]
      }
    },
    async created() {
      const response = await axios.get('http://localhost:3000/categories')
      this.categories = response.data;
    }
  }
</script>


