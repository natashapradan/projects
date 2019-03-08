<template>
  <b-row v-if="product" class="pt-4">
    <b-col md="12" lg="6">
      <div>
        <img :src="product.image" class="img-fluid">
      </div>
    </b-col>

    <b-col class="text-white text-left">
      <h2>{{product.name}}</h2>
      <h4>{{ product.price }}</h4>
      <p>{{ product.quantity }} in stock</p>



      <!--<p>{{ product.description }}</p>-->
      <!--<router-link :to="{ path: '/projects/' + product.id + '/edit'}" class="btn btn-primary btn-block">-->
        <!--Edit-->
      <!--</router-link>-->



      <!--<table class="table table-secondary mt-4 w-100">-->
        <!--<tbody>-->
        <!--<tr v-for="flat in product.flats">-->
          <!--<td v-if="flat.rooms >= 2">{{ flat.rooms }} rooms</td>-->
          <!--<td v-else>{{ flat.rooms }} room</td>-->
          <!--<td>{{ flat.area }} m<sup>2</sup></td>-->
          <!--<td>{{flat.area * project.price}} CT$</td>-->
          <!--<td v-if="flat.avail" class="text-danger"><strong>Available!</strong></td>-->
          <!--<td v-else class="text-warning">Sold</td>-->
        <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->
    </b-col>
  </b-row>
</template>

<script>
  import axios from "axios"


  export default {
    name: 'product',
    data() {
      return {
        title: 'product',
        product: null,
      }
    },
    async created() {

      const response = await axios.get('http://localhost:3000/categories/' + this.$route.params.id);
      this.product = response.data;
      debugger
    }
  }

</script>

