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
        <s>{{ product.oldPrice }} CAT$</s>
        <h4 class="text-danger">Now for {{product.price}} CAT$!</h4>
      </div>
      <div v-else>
        <h4>{{ product.price }} CAT$</h4>
      </div>

      <p v-if="!product.discount"><strong>{{ product.quantity }} in stock</strong></p>
      <div v-if="product.discount">
        <b-button @click="addToCart(product)" class="mt-4" block type="submit" variant="primary">Add to Cart <i
            class="fas fa-shopping-cart"></i></b-button>
      </div>
      <div v-else>
        <b-button @click="addToCart(product)" block type="submit" variant="primary">Add to Cart <i
            class="fas fa-shopping-cart"></i></b-button>
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
        category: {products: []},
      }
    },
    async created() {

      const response = await axios.get('http://localhost:3000/categories/' + this.$route.params.id)
      this.category = response.data;
    },

    methods: {

      addToCart(product) {
        let cartItems;

        if (localStorage.getItem('cartItems')) {
          cartItems = JSON.parse(localStorage.getItem('cartItems'));
        } else {
          cartItems = [];
        }
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.$router.push('/cart');
      }
    }
  }
  //
</script>


