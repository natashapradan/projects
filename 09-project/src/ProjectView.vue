<template>
  <b-row v-if="project" class="pt-4">
    <b-col md="12" lg="6">
      <div>
        <img :src="project.image" class="img-fluid">
      </div>
    </b-col>

    <b-col class="text-white text-left">
      <h2>{{project.title}}</h2>
      <h4>Address: {{ project.city }}, {{ project.street }} {{ project.house }}</h4>
      <p>Distance to the center: <i class="fas fa-car"></i> {{ project.distance }} min</p>
      <p>Number of floors: {{ project.floors }}</p>
      <p>Price per square meter:</p> <h4>from {{ project.price }} CT$</h4>
      <router-link :to="{ path: '/projects/' + project.id + '/edit'}" class="btn btn-primary btn-block">
        Edit
      </router-link>

      <table class="table table-secondary mt-4 w-100">
        <tbody>
        <tr v-for="flat in project.flats">
          <td v-if="flat.rooms >= 2">{{ flat.rooms }} rooms</td>
          <td v-else>{{ flat.rooms }} room</td>
          <td>{{ flat.area }} m</td>
          <td>{{flat.area * project.price}} CT$</td>
          <td v-if="flat.avail" class="text-danger"><strong>Available!</strong></td>
          <td v-else class="text-warning">Sold</td>
        </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
    import axios from "axios"


    export default {
        name: 'projects',
        data() {
            return {
                title: 'projects',
                project: null,
            }
        },
        async created() {
            const response = await axios.get('http://localhost:3000/projects/' + this.$route.params.id);
            this.project = response.data;
        }
    }

</script>

