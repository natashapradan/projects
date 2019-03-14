<template>
  <div class="d-flex flex-row flex-wrap">
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
      <div v-if="product.discount">
        <h4>{{ product.discount }} CAT$</h4>
      </div>
      <div v-else>
        <h4>{{ product.price }} CAT$</h4>
      </div>
      <b-button block variant="danger" @click="onDelete(index)" style="border: none;">
        <i class="far fa-trash-alt"></i>
      </b-button>
    </b-card>

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
    }
  }
  //
</script>

