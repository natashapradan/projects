<template>
  <div v-if="category" class="d-flex flex-row flex-wrap">
    <b-card
        v-for="product in category.products"
        :title="product.name"
        :img-src="product.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
        class="m-2"
    >
      <p><em>{{ product.description }}</em></p>
      <p><h4>{{ product.price }} CAT$</h4></p>
      <p><strong>{{ product.quantity }} in stock</strong></p>
      <router-link :to="{ path: '/cart'}" class="btn btn-primary btn-block mt-2">
        Go Grab Some
      </router-link>

    </b-card>
  </div>

</template>

<script>
  import axios from "axios"

  export default {
    name: 'products',
    data() {
      return {
        title: 'products',
        category: {products: []}
      }
    },
    async created() {

      const response = await axios.get('http://localhost:3000/categories/' + this.$route.params.id)
      this.category = response.data;
    }
  }
  //
</script>


