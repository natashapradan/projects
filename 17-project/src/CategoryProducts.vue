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
      <div v-if="product.discount">
        <s>{{ product.price }} CAT$</s>
        <h4 class="text-danger">Now for {{product.discount}} CAT$!</h4>
      </div>
      <div v-else>
        <h4>{{ product.price }} CAT$</h4>
      </div>

      <p v-if="!product.discount"><strong>{{ product.quantity }} in stock</strong></p>
      <div v-if="product.discount">
        <router-link :to="{ path: '/cart'}" class="btn btn-primary btn-block mt-4">
          Add to Cart
        </router-link>
      </div>
      <div v-else>
        <router-link :to="{ path: '/cart'}" class="btn btn-primary btn-block mt-2">
          Add to Cart <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>

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


