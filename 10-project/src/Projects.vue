<template>
  <div class="d-flex flex-row flex-wrap">
    <b-card
        v-for="project in projects"
        :title="project.title"
        :img-src="project.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; border: 1px solid white;"
        class="m-2"
        text-variant="white"
    >
      <strong>Address: {{ project.city }}, {{ project.street }} {{ project.house }}</strong>
      <p>Distance to the center: <i class="fas fa-car"></i> {{ project.distance }} min</p>
      <p>Number of floors: <strong>{{ project.floors }}</strong></p>
      <p>Price per square meter:</p><h4>from {{ project.price }} CT$</h4>
      <router-link :to="{ path: '/projects/' + project.id}" class="btn btn-primary btn-block">
        More info
      </router-link>

    </b-card>
    <!--<b-col class="d-flex flex-column justify-content-center align-items-center">-->
    <!--<router-link :to="{ path: '/projects/' + 'add'}" class="btn btn-primary text-center" style="max-width: 100px; max-height: 100px">-->
      <!--<p>Add New Project</p>-->
      <!--<p><i class="fas fa-plus-square"></i></p>-->
    <!--</router-link>-->
    <!--</b-col>-->
  </div>

</template>

<script>
    import DropdownOptions from "./components/DropdownOptions.vue";
    import axios from "axios"

    export default {
        name: 'projects',
        data() {
            return {
                title: 'projects',
                projects: [
                    {id: '1', route: '1'},
                    {id: '2', route: '2'},
                    {id: '3', route: '3'}
                ]
            }
        },
        async created() {
            const response = await axios.get('http://localhost:3000/projects')
            this.projects = response.data;
        }
    }
    //
</script>


