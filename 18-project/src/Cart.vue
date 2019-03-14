<template>
  <div class="d-flex flex-row flex-wrap">
    <b-card
        v-for="product in products"
        :title="product.name"
        :img-src="product.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white; text-transform: capitalize"
        class="m-2"
    >
      <h4>{{ product.price }} CAT$</h4>

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
    }
  }
  //
</script>

