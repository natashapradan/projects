<template>
  <div>
    <b-row>
      <b-card
          v-for="(product, index) in products"
          :title="product.name"
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
          class="m-2"
      >
        <div>
          <h4 class="text-primary">{{ product.price }} CAT$</h4>
        </div>
        <b-button block variant="danger" @click="onDelete(index)" style="border: none;">
          <i class="far fa-trash-alt"></i>
        </b-button>
      </b-card>
    </b-row>
    <b-row>
      <h2 class="ml-auto mr-4 text-success">Total: {{ total }} CAT$</h2>
    </b-row>
    <b-row>
      <router-link :to="{ path: '/categories'}" class="ml-auto mr-2 btn btn-primary mt-2">
        Continue Shopping
      </router-link>
      <b-button class="btn btn-primary mr-3 mt-2">
        Checkout
      </b-button>
    </b-row>

  </div>

</template>

<script>

  export default {
    name: 'products',
    data() {
      return {
        title: 'products',
        products: JSON.parse(localStorage.getItem('cartItems'))
      }
    },
    methods: {
      onDelete(index) {
        this.products.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(this.products));
      }
    },
    computed: {
      total() {
        return this.products.reduce((acc, cur) => acc + cur.price, 0);
      },
    }
  }
  //
</script>

